import { useEffect, useRef } from 'react';

export function useSwipe(
  onSwipeLeft: () => void,
  onSwipeRight: () => void,
  threshold = 60,
) {
  const startX = useRef(0);
  const callbacks = useRef({ onSwipeLeft, onSwipeRight });
  callbacks.current = { onSwipeLeft, onSwipeRight };

  useEffect(() => {
    const onTouchStart = (e: TouchEvent) => {
      startX.current = e.changedTouches[0].screenX;
    };

    const onTouchEnd = (e: TouchEvent) => {
      const diff = startX.current - e.changedTouches[0].screenX;
      if (Math.abs(diff) > threshold) {
        if (diff > 0) callbacks.current.onSwipeLeft();
        else callbacks.current.onSwipeRight();
      }
    };

    document.addEventListener('touchstart', onTouchStart, { passive: true });
    document.addEventListener('touchend', onTouchEnd, { passive: true });

    return () => {
      document.removeEventListener('touchstart', onTouchStart);
      document.removeEventListener('touchend', onTouchEnd);
    };
  }, [threshold]);
}
