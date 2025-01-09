import { useState } from "react";

export const useForm = (initialValue = {}) => {
  const [formControl, setFormControl] = useState(initialValue);

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setFormControl({ ...formControl, [name]: value });
  };

  const onResetForm = () => {
    setFormControl(initialValue);
  };

  return {
    formControl,
    onInputChange,
    onResetForm,
  };
};
