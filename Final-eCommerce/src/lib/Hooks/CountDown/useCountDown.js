import { useEffect, useState } from "react";

export const useCountDown = (duration = 120) => {
  const [remainingTime, setRemainingTime] = useState(0);

  useEffect(() => {
    if (remainingTime <= 0) return;

    const timer = setInterval(() => {
      setRemainingTime((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [remainingTime]);

  const startCountDown = () => {
    setRemainingTime(duration);
  };

  return {
    remainingTime,
    isTimerActive: remainingTime > 0,
    startCountDown,
  };
};