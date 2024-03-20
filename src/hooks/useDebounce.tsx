//REF: https://usehooks.com/useDebounce/
import { useEffect, useState } from 'react';

interface UseDebouncedArgs<T> {
  value: T;
  delay: number;
}

export const useDebounce = <T,>({ value, delay }: UseDebouncedArgs<T>): T => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
};
