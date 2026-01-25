mod keychain;
mod device;

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
  tauri::Builder::default()
    .setup(|app| {
      if cfg!(debug_assertions) {
        app.handle().plugin(
          tauri_plugin_log::Builder::default()
            .level(log::LevelFilter::Info)
            .build(),
        )?;
      }
      Ok(())
    })
    .invoke_handler(tauri::generate_handler![
      keychain::store_secret_key,
      keychain::load_secret_key,
      keychain::clear_secret_key,
      device::get_device_id,
      device::clear_device_id,
    ])
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}
