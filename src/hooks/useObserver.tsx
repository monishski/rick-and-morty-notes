import type { MutableRefObject } from 'react';
import { useEffect, useRef } from 'react';

interface UseObserverArgs {
  enabled: boolean;
  cb: () => void;
}

interface UseObserverReturnType<T extends HTMLElement> {
  ref: MutableRefObject<T>;
}

export const useObserver = <T extends HTMLElement>({ enabled, cb }: UseObserverArgs): UseObserverReturnType<T> => {
  const refObserverTarget = useRef<T>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && enabled) cb();
      },
      { threshold: 1 }
    );

    if (refObserverTarget.current) {
      observer.observe(refObserverTarget.current);
    }

    return (): void => {
      if (refObserverTarget.current) {
        observer.unobserve(refObserverTarget.current);
      }
    };
  }, [refObserverTarget, enabled, cb]);

  return { ref: refObserverTarget };
};
