import { RefObject, useEffect } from 'react';

type AnyEvent = MouseEvent | TouchEvent;

interface ClickOutside<T extends HTMLElement = HTMLElement> {
  (ref: RefObject<T>, callback: (e: AnyEvent) => void): void;
}

export const useClickOutside: ClickOutside = (ref, callback) => {
  useEffect(() => {
    const listener = (e: AnyEvent) => {
      const el = ref?.current;

      if (!el || el.contains(e.target as Node)) {
        return;
      }

      callback(e);
    };

    document.addEventListener('mousedown', listener);

    return () => {
      document.removeEventListener('mousedown', listener);
    };
  }, [ref, callback]);
};
