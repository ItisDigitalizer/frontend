import { useState } from 'react';
import type { Validators, Errors, Touched } from './types';

type Props<T> = {
  initialValues: T;
  validators: Validators<T>;
};

export const useFormValidation = <T extends Record<string, string>>({ initialValues, validators }: Props<T>) => {
  const [values, setValues] = useState(initialValues);

  const [errors, setErrors] = useState<Errors<T>>({});

  const [touched, setTouched] = useState(
    Object.fromEntries(Object.keys(initialValues).map((key) => [key, false])) as Touched<T>,
  );

  const validateField = (field: keyof T, value: string) => {
    const error = validators[field](value);

    setErrors((prev) => ({
      ...prev,
      [field]: error,
    }));

    return error;
  };

  const handleChange = (field: keyof T, value: string) => {
    setValues((prev) => ({
      ...prev,
      [field]: value,
    }));

    if (touched[field]) {
      validateField(field, value);
    }
  };

  const handleBlur = (field: keyof T) => {
    setTouched((prev) => ({
      ...prev,
      [field]: true,
    }));

    validateField(field, values[field]);
  };

  const validateForm = () => {
    const nextErrors = {} as Errors<T>;

    for (const field in values) {
      nextErrors[field] = validators[field](values[field]);
    }

    setErrors(nextErrors);

    setTouched(Object.fromEntries(Object.keys(values).map((key) => [key, true])) as Touched<T>);

    return !Object.values(nextErrors).some(Boolean);
  };

  return { values, errors, touched, handleChange, handleBlur, validateForm };
};
