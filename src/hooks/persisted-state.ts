import { Dispatch, SetStateAction, useEffect, useState } from 'react';

type Response<T> = [T, Dispatch<SetStateAction<T>>];

export const usePersistedState = <T>(key: string, initial: T): Response<T> => {
  const [state, setState] = useState(() => {
    const storageValue =
      typeof window !== 'undefined' ? window.localStorage.getItem(key) : false;

    if (storageValue) return JSON.parse(storageValue);

    return initial;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
};
