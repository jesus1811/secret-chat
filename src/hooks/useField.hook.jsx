import { useState } from "react";

const useField = (limit = 100, initialState = "", type) => {
  const [value, setValue] = useState(initialState);
  const onChange = (e) => {
    setValue(e.target.value.slice(0, limit));
  };
  return {
    type,
    value,
    onChange,
    setValue,
  };
};

export default useField;