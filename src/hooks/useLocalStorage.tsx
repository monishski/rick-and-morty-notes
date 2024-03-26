import { useCallback } from 'react';

export function useLocalStorage<T>(): {
  get: (key: string) => T;
  set: (key: string, value: T) => void;
} {
  const set = useCallback((key: string, data: T): void => {
    if (typeof window !== 'undefined') window.localStorage.setItem(key, JSON.stringify(data));
  }, []);

  const get = useCallback((key: string): T => {
    if (typeof window !== 'undefined') return JSON.parse(window.localStorage.getItem(key));
    else return null;
  }, []);

  return { get, set };
}
