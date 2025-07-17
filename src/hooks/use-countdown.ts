import { useCallback, useEffect, useRef, useState } from "react";

interface UseCountdownOptions {
  duration: number; // in seconds
  onExpire?: () => void;
  autoStart?: boolean;
}

export function useCountdown({
  duration,
  onExpire,
  autoStart = false,
}: UseCountdownOptions) {
  const [timeLeft, setTimeLeft] = useState(duration);
  const [isActive, setIsActive] = useState(autoStart);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const start = useCallback(() => {
    setTimeLeft(duration);
    setIsActive(true);
  }, [duration]);

  const pause = useCallback(() => {
    setIsActive(false);
  }, []);

  const reset = useCallback(() => {
    setIsActive(false);
    setTimeLeft(duration);
  }, [duration]);

  useEffect(() => {
    if (!isActive) return;

    intervalRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(intervalRef.current!);
          setIsActive(false);
          onExpire?.();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isActive, onExpire]);

  return {
    timeLeft,
    isActive,
    start,
    pause,
    reset,
  };
}
