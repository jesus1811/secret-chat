import { useState } from "react";

export const useField = (initialState = "", type) => {
  const [value, setValue] = useState(initialState);
  const onChange = (e) => {
    setValue(e.target.value);
  };
  return {
    type,
    value,
    onChange,
    setValue,
  };
};
