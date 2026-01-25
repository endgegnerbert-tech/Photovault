/**
 * Device Module - Persistent Device ID Management
 *
 * Stores device ID in app data directory to survive localStorage clears.
 * Critical for multi-device sync and preventing duplicate device registrations.
 */

use std::fs;
use std::path::PathBuf;
use tauri::{AppHandle, Manager};
use uuid::Uuid;

const DEVICE_ID_FILENAME: &str = "device_id";

/// Get or generate a persistent device ID
///
/// # Persistence Strategy
/// 1. Check app data directory for existing ID
/// 2. If not found, generate new UUID v4
/// 3. Save to app data directory
///
/// # Security
/// - ID is NOT sensitive (public identifier)
/// - Survives localStorage clears on iOS/Safari
/// - Stored in app-scoped directory
#[tauri::command]
pub fn get_device_id(app: AppHandle) -> Result<String, String> {
    let device_file_path = get_device_id_path(&app)?;

    // Try to load existing ID
    if device_file_path.exists() {
        match fs::read_to_string(&device_file_path) {
            Ok(id) => {
                log::info!("[Device] Loaded existing device ID");
                return Ok(id.trim().to_string());
            }
            Err(e) => {
                log::warn!("[Device] Failed to read device ID file: {}", e);
                // Continue to generate new ID
            }
        }
    }

    // Generate new ID
    let new_id = Uuid::new_v4().to_string();
    log::info!("[Device] Generated new device ID: {}", new_id);

    // Save to file
    if let Err(e) = fs::write(&device_file_path, &new_id) {
        log::error!("[Device] Failed to save device ID: {}", e);
        return Err(format!("Failed to save device ID: {}", e));
    }

    Ok(new_id)
}

/// Get the path to the device ID file
///
/// # Location
/// - macOS: ~/Library/Application Support/dev.photovault.app/device_id
/// - Windows: %APPDATA%\dev.photovault.app\device_id
/// - Linux: ~/.config/dev.photovault.app/device_id
fn get_device_id_path(app: &AppHandle) -> Result<PathBuf, String> {
    let app_data_dir = app.path()
        .app_data_dir()
        .map_err(|e| format!("Failed to get app data directory: {}", e))?;

    // Ensure directory exists
    if !app_data_dir.exists() {
        fs::create_dir_all(&app_data_dir)
            .map_err(|e| format!("Failed to create app data directory: {}", e))?;
    }

    Ok(app_data_dir.join(DEVICE_ID_FILENAME))
}

/// Clear the device ID (for testing or reset purposes)
///
/// # Warning
/// This will cause the app to generate a new device ID on next launch,
/// which may cause duplicate device entries in Supabase.
#[tauri::command]
pub fn clear_device_id(app: AppHandle) -> Result<(), String> {
    log::info!("[Device] Clearing device ID");

    let device_file_path = get_device_id_path(&app)?;

    if device_file_path.exists() {
        fs::remove_file(&device_file_path)
            .map_err(|e| format!("Failed to remove device ID file: {}", e))?;
        log::info!("[Device] Device ID cleared");
    } else {
        log::info!("[Device] No device ID file to clear");
    }

    Ok(())
}

#[cfg(test)]
mod tests {
    use super::*;
    use tauri::test::{mock_app, mock_context};

    #[test]
    fn test_device_id_generation() {
        let app = mock_app();

        // First call should generate new ID
        let id1 = get_device_id(app.handle().clone()).unwrap();
        assert!(!id1.is_empty());
        assert_eq!(id1.len(), 36); // UUID format

        // Second call should return same ID
        let id2 = get_device_id(app.handle().clone()).unwrap();
        assert_eq!(id1, id2, "Device ID should persist");

        // Cleanup
        clear_device_id(app.handle().clone()).ok();
    }

    #[test]
    fn test_clear_device_id() {
        let app = mock_app();

        // Generate ID
        let id1 = get_device_id(app.handle().clone()).unwrap();

        // Clear it
        let clear_result = clear_device_id(app.handle().clone());
        assert!(clear_result.is_ok());

        // Next call should generate new ID
        let id2 = get_device_id(app.handle().clone()).unwrap();
        assert_ne!(id1, id2, "New ID should be different after clear");

        // Cleanup
        clear_device_id(app.handle().clone()).ok();
    }

    #[test]
    fn test_uuid_format() {
        let app = mock_app();
        let id = get_device_id(app.handle().clone()).unwrap();

        // Validate UUID format
        assert!(Uuid::parse_str(&id).is_ok(), "Should be valid UUID");

        // Cleanup
        clear_device_id(app.handle().clone()).ok();
    }
}
