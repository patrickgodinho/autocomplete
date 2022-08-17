import { useEffect } from 'react';

export function useDebounce(observable: any, callback: Function, time: number) {
  let timer: number;
  useEffect(() => {
    if (!observable) return;

    clearTimeout(timer);
    timer = setTimeout(callback, time);

    return () => {
      clearTimeout(timer);
    };
  }, [observable]);
}
