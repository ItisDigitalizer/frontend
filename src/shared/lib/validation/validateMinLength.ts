import { pluralize } from '../pluralize';

export const validateMinLength = (value: string, minLength: number) => {
  if (value.trim().length < minLength) {
    return `Минимум ${pluralize(minLength, 'символ', 'символа', 'символов')}`;
  }
  return '';
};
