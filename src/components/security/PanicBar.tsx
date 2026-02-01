'use client';

/**
 * PanicBar Component
 *
 * Emergency wipe functionality for physical safety.
 * Swipe down from top or pull down to trigger complete data destruction.
 *
 * PANIC PROTOCOL:
 * 1. Overwrite all localStorage keys with random data (3x)
 * 2. Delete all IndexedDB databases
 * 3. Clear service worker caches
 * 4. Unregister service workers
 * 5. Force navigation to about:blank
 *
 * USE CASE:
 * When a user's physical safety is at risk and they need to
 * immediately destroy all evidence of app usage.
 */

import { useCallback, useRef, useState } from 'react';
import { executePanicProtocol } from '@/lib/crypto';
import { AlertTriangle, ChevronDown } from 'lucide-react';

interface PanicBarProps {
  /** Whether the panic bar is enabled */
  enabled?: boolean;
  /** Swipe threshold in pixels to trigger (default: 150) */
  swipeThreshold?: number;
  /** Confirmation required before wiping (default: true) */
  requireConfirmation?: boolean;
}

type PanicState = 'idle' | 'pulling' | 'confirming' | 'wiping';

export function PanicBar({
  enabled = true,
  swipeThreshold = 150,
  requireConfirmation = true,
}: PanicBarProps) {
  const [state, setState] = useState<PanicState>('idle');
  const [pullDistance, setPullDistance] = useState(0);
  const startY = useRef<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  /**
   * Execute the panic protocol
   */
  const triggerPanic = useCallback(async () => {
    if (!enabled) return;

    setState('wiping');

    // Small delay for visual feedback
    await new Promise((resolve) => setTimeout(resolve, 100));

    // Execute the full panic protocol
    await executePanicProtocol();

    // Note: executePanicProtocol redirects to about:blank
    // so we won't reach this point
  }, [enabled]);

  /**
   * Handle confirmation
   */
  const handleConfirm = useCallback(() => {
    triggerPanic();
  }, [triggerPanic]);

  /**
   * Cancel confirmation
   */
  const handleCancel = useCallback(() => {
    setState('idle');
    setPullDistance(0);
  }, []);

  /**
   * Touch start handler
   */
  const handleTouchStart = useCallback(
    (e: React.TouchEvent) => {
      if (!enabled || state !== 'idle') return;

      // Only trigger if starting from top of screen
      const touch = e.touches[0];
      if (touch.clientY > 50) return;

      startY.current = touch.clientY;
      setState('pulling');
    },
    [enabled, state]
  );

  /**
   * Touch move handler
   */
  const handleTouchMove = useCallback(
    (e: React.TouchEvent) => {
      if (!enabled || state !== 'pulling' || startY.current === null) return;

      const touch = e.touches[0];
      const distance = Math.max(0, touch.clientY - startY.current);
      setPullDistance(distance);

      // Prevent default to avoid scroll
      if (distance > 10) {
        e.preventDefault();
      }
    },
    [enabled, state]
  );

  /**
   * Touch end handler
   */
  const handleTouchEnd = useCallback(() => {
    if (!enabled || state !== 'pulling') return;

    if (pullDistance >= swipeThreshold) {
      if (requireConfirmation) {
        setState('confirming');
      } else {
        triggerPanic();
      }
    } else {
      setState('idle');
      setPullDistance(0);
    }

    startY.current = null;
  }, [enabled, pullDistance, requireConfirmation, state, swipeThreshold, triggerPanic]);

  if (!enabled) return null;

  // Calculate visual progress
  const progress = Math.min(1, pullDistance / swipeThreshold);
  const pullIndicatorHeight = Math.min(100, pullDistance);

  return (
    <>
      {/* Touch capture zone (invisible, full screen) */}
      <div
        ref={containerRef}
        className="fixed inset-0 z-[100] pointer-events-none"
        style={{ touchAction: 'none' }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      />

      {/* Pull indicator (visible when pulling) */}
      {state === 'pulling' && pullDistance > 0 && (
        <div
          className="fixed top-0 left-0 right-0 z-[101] flex flex-col items-center justify-center bg-red-600 text-white transition-all"
          style={{ height: pullIndicatorHeight }}
        >
          <ChevronDown
            className="w-8 h-8 animate-bounce"
            style={{ opacity: progress }}
          />
          {progress >= 1 && (
            <span className="text-sm font-medium">Release to wipe</span>
          )}
        </div>
      )}

      {/* Confirmation dialog */}
      {state === 'confirming' && (
        <div className="fixed inset-0 z-[102] bg-black/90 flex items-center justify-center p-4">
          <div className="bg-red-900 rounded-2xl p-6 max-w-sm w-full text-center">
            <AlertTriangle className="w-16 h-16 text-red-500 mx-auto mb-4" />
            <h2 className="text-xl font-bold text-white mb-2">Emergency Wipe</h2>
            <p className="text-red-200 mb-6">
              This will permanently delete all data on this device.
              This action cannot be undone.
            </p>
            <div className="flex gap-4">
              <button
                onClick={handleCancel}
                className="flex-1 py-3 px-4 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleConfirm}
                className="flex-1 py-3 px-4 bg-red-600 hover:bg-red-500 text-white rounded-lg font-medium transition-colors"
              >
                Wipe Now
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Wiping state */}
      {state === 'wiping' && (
        <div className="fixed inset-0 z-[102] bg-black flex items-center justify-center">
          <div className="text-center">
            <div className="w-16 h-16 border-4 border-red-500 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
            <p className="text-red-500 font-medium">Wiping data...</p>
          </div>
        </div>
      )}
    </>
  );
}

/**
 * Manual panic trigger button
 * Can be placed in settings or as a floating button
 */
export function PanicButton({
  className = '',
  requireConfirmation = true,
}: {
  className?: string;
  requireConfirmation?: boolean;
}) {
  const [showConfirm, setShowConfirm] = useState(false);

  const handleTrigger = useCallback(async () => {
    if (requireConfirmation) {
      setShowConfirm(true);
    } else {
      await executePanicProtocol();
    }
  }, [requireConfirmation]);

  const handleConfirm = useCallback(async () => {
    await executePanicProtocol();
  }, []);

  return (
    <>
      <button
        onClick={handleTrigger}
        className={`flex items-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-500 text-white rounded-lg transition-colors ${className}`}
      >
        <AlertTriangle className="w-5 h-5" />
        <span>Emergency Wipe</span>
      </button>

      {/* Confirmation dialog */}
      {showConfirm && (
        <div className="fixed inset-0 z-[102] bg-black/90 flex items-center justify-center p-4">
          <div className="bg-red-900 rounded-2xl p-6 max-w-sm w-full text-center">
            <AlertTriangle className="w-16 h-16 text-red-500 mx-auto mb-4" />
            <h2 className="text-xl font-bold text-white mb-2">Emergency Wipe</h2>
            <p className="text-red-200 mb-6">
              This will permanently delete all data on this device.
              This action cannot be undone.
            </p>
            <div className="flex gap-4">
              <button
                onClick={() => setShowConfirm(false)}
                className="flex-1 py-3 px-4 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleConfirm}
                className="flex-1 py-3 px-4 bg-red-600 hover:bg-red-500 text-white rounded-lg font-medium transition-colors"
              >
                Wipe Now
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default PanicBar;
