'use client';

/**
 * StealthTrigger Component
 *
 * A hidden unlock mechanism for stealth drop pages.
 * Wraps innocent content and detects secret trigger patterns.
 *
 * TRIGGER TYPES:
 * - tripleTap: 3 taps within 500ms on the trigger zone
 * - longPress: 3+ second press on the trigger zone
 * - shake: Device shake detection (mobile only)
 *
 * SECURITY:
 * - No visual indication of hidden functionality
 * - Trigger zone blends with theme UI
 * - Debounce to prevent accidental activation
 */

import { useCallback, useEffect, useRef, useState } from 'react';

export type TriggerType = 'tripleTap' | 'longPress' | 'shake';

interface StealthTriggerProps {
  /** Called when the trigger pattern is detected */
  onUnlock: () => void;
  /** Type of trigger pattern to detect */
  triggerType?: TriggerType;
  /** The innocent content to wrap (e.g., hero image) */
  children: React.ReactNode;
  /** Optional: Number of taps for tripleTap (default: 3) */
  tapCount?: number;
  /** Optional: Long press duration in ms (default: 3000) */
  longPressDuration?: number;
  /** Optional: Disable the trigger */
  disabled?: boolean;
  /** Optional: Additional class names */
  className?: string;
}

export function StealthTrigger({
  onUnlock,
  triggerType = 'tripleTap',
  children,
  tapCount = 3,
  longPressDuration = 3000,
  disabled = false,
  className = '',
}: StealthTriggerProps) {
  // Triple tap tracking
  const tapTimestamps = useRef<number[]>([]);

  // Long press tracking
  const longPressTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const isPressing = useRef(false);

  // Shake detection
  const lastAcceleration = useRef({ x: 0, y: 0, z: 0 });
  const shakeCount = useRef(0);
  const shakeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Unlock cooldown to prevent multiple triggers
  const [isOnCooldown, setIsOnCooldown] = useState(false);

  /**
   * Handle unlock with cooldown
   */
  const handleUnlock = useCallback(() => {
    if (disabled || isOnCooldown) return;

    setIsOnCooldown(true);
    onUnlock();

    // Reset cooldown after 2 seconds
    setTimeout(() => setIsOnCooldown(false), 2000);
  }, [disabled, isOnCooldown, onUnlock]);

  /**
   * Triple tap handler
   */
  const handleTap = useCallback(() => {
    if (disabled || triggerType !== 'tripleTap') return;

    const now = Date.now();
    tapTimestamps.current.push(now);

    // Keep only taps within the last 500ms
    const recentTaps = tapTimestamps.current.filter((t) => now - t < 500);
    tapTimestamps.current = recentTaps;

    // Check if we have enough taps
    if (recentTaps.length >= tapCount) {
      tapTimestamps.current = [];
      handleUnlock();
    }
  }, [disabled, handleUnlock, tapCount, triggerType]);

  /**
   * Long press start handler
   */
  const handlePressStart = useCallback(() => {
    if (disabled || triggerType !== 'longPress') return;

    isPressing.current = true;

    longPressTimer.current = setTimeout(() => {
      if (isPressing.current) {
        handleUnlock();
      }
    }, longPressDuration);
  }, [disabled, handleUnlock, longPressDuration, triggerType]);

  /**
   * Long press end handler
   */
  const handlePressEnd = useCallback(() => {
    isPressing.current = false;

    if (longPressTimer.current) {
      clearTimeout(longPressTimer.current);
      longPressTimer.current = null;
    }
  }, []);

  /**
   * Shake detection setup
   */
  useEffect(() => {
    if (disabled || triggerType !== 'shake') return;

    const handleMotion = (event: DeviceMotionEvent) => {
      const acceleration = event.accelerationIncludingGravity;
      if (!acceleration) return;

      const { x, y, z } = acceleration;
      const last = lastAcceleration.current;

      // Calculate acceleration delta
      const deltaX = Math.abs((x || 0) - last.x);
      const deltaY = Math.abs((y || 0) - last.y);
      const deltaZ = Math.abs((z || 0) - last.z);

      // Threshold for shake detection
      const threshold = 15;

      if (deltaX > threshold || deltaY > threshold || deltaZ > threshold) {
        shakeCount.current++;

        // Reset shake count after 1 second of no shaking
        if (shakeTimer.current) {
          clearTimeout(shakeTimer.current);
        }
        shakeTimer.current = setTimeout(() => {
          shakeCount.current = 0;
        }, 1000);

        // Require 3 shakes
        if (shakeCount.current >= 3) {
          shakeCount.current = 0;
          handleUnlock();
        }
      }

      lastAcceleration.current = { x: x || 0, y: y || 0, z: z || 0 };
    };

    // Request permission on iOS 13+
    const requestPermission = async () => {
      if (
        typeof DeviceMotionEvent !== 'undefined' &&
        'requestPermission' in DeviceMotionEvent &&
        typeof (DeviceMotionEvent as unknown as { requestPermission: () => Promise<string> }).requestPermission === 'function'
      ) {
        try {
          const permission = await (DeviceMotionEvent as unknown as { requestPermission: () => Promise<string> }).requestPermission();
          if (permission === 'granted') {
            window.addEventListener('devicemotion', handleMotion);
          }
        } catch {
          // Permission denied or not supported
        }
      } else {
        // No permission needed
        window.addEventListener('devicemotion', handleMotion);
      }
    };

    requestPermission();

    return () => {
      window.removeEventListener('devicemotion', handleMotion);
      if (shakeTimer.current) {
        clearTimeout(shakeTimer.current);
      }
    };
  }, [disabled, handleUnlock, triggerType]);

  /**
   * Cleanup on unmount
   */
  useEffect(() => {
    return () => {
      if (longPressTimer.current) {
        clearTimeout(longPressTimer.current);
      }
    };
  }, []);

  // Common event handlers
  const eventHandlers =
    triggerType === 'tripleTap'
      ? {
          onClick: handleTap,
        }
      : triggerType === 'longPress'
      ? {
          onMouseDown: handlePressStart,
          onMouseUp: handlePressEnd,
          onMouseLeave: handlePressEnd,
          onTouchStart: handlePressStart,
          onTouchEnd: handlePressEnd,
          onTouchCancel: handlePressEnd,
        }
      : {};

  return (
    <div
      className={`stealth-trigger ${className}`}
      style={{ touchAction: 'manipulation' }}
      {...eventHandlers}
    >
      {children}
    </div>
  );
}

export default StealthTrigger;
