export const validateRequired = (value: string, fieldName: string) => {
  if (!value.trim()) {
    return `Введите ${fieldName}`;
  }
  return '';
};
