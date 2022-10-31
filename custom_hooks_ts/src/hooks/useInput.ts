import { ChangeEvent, useCallback, useState } from "react";

type InputProps = [string, (e: ChangeEvent<HTMLInputElement>) => void];

const useInput = (initialState: string): InputProps => {
  const [value, setValue] = useState(initialState);
  const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const { target } = e;
    const { value } = target;
    setValue(value);
  }, []);

  return [value, onChange];
};

export default useInput;
