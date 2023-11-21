import { ChangeEvent, useCallback, useState } from "react";

export const useInput = <T>(
  initialState: T
): [T, (event: ChangeEvent<HTMLInputElement>) => void] => {
  console.log(typeof initialState === "object");
  const [form, setForm] = useState<T>(initialState);

  const onChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      if (typeof initialState === "object") {
        const { value, name } = event.target;
        const newForm = {
          ...form,
          [name]: value,
        };
        setForm(newForm);
      } else {
        const value = event.target.value as unknown as T;
        setForm(value);
      }
    },
    [form]
  );
  return [form, onChange];
};
