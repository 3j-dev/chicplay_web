import { useEffect, useState } from 'react';

interface UseIntervalT {
  (callback: () => void, interval: number): void;
}

const useInterval: UseIntervalT = (callback, delay) => {
  const [savedCallback, setSavedCallback] = useState<() => void>(() => {}); // useState사용

  useEffect(() => {
    setSavedCallback(callback);
  }, [callback]);

  useEffect(() => {
    const executeCallback = () => {
      savedCallback();
    };

    const timerId = setInterval(executeCallback, delay);

    return () => clearInterval(timerId);
  }, [delay, savedCallback]);
};

export default useInterval;
