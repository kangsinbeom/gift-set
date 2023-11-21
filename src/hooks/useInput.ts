import { ChangeEvent, useCallback, useState } from "react";

export const useInput = <T>(
  initialState: T
): [T, (event: ChangeEvent<HTMLInputElement>) => void] => {
  const [form, setForm] = useState<T>(initialState);

  const onChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const value = event.target.value as unknown as T;

      setForm(value);
    },
    [setForm]
  );
  return [form, onChange];
};
