import { useEffect, useState } from 'react';
import { getItemStorage, setItemStorage } from 'utils/storage';

export function useStorage<T = any>(key: string, defaultValue: T = null as any) {
  const [state, setState] = useState<T>(() => {
    const storageValue = getItemStorage(key);

    if (storageValue) {
      return JSON.parse(storageValue);
    }

    return defaultValue;
  });

  useEffect(() => {
    setItemStorage(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
}
