import { useCallback, useState } from 'react';

type HandleToggle<T> = (key: T, value: boolean) => void;

type UseToggleParams<T extends string = string> = Record<T, boolean>;

type UseToggleReturn<T extends string = string> = [Record<T, boolean>, HandleToggle<T>];

export function useToggle<T extends string = string>(
  initialState: UseToggleParams<T>,
): UseToggleReturn<T> {
  const [toggles, setToggles] = useState(initialState);

  const handleToggle = useCallback<HandleToggle<T>>((key, value) => {
    setToggles(prevState => ({ ...prevState, [key]: value ?? !prevState[key] }));
  }, []);

  return [toggles, handleToggle];
}
