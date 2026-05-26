import { validateRequired, validateMinLength } from '@/shared/lib/validation';

export const validateUsername = (username: string) => {
  return validateRequired(username, 'имя пользователя') || validateMinLength(username, 3);
};

export const validatePassword = (password: string) => {
  return validateRequired(password, 'пароль') || validateMinLength(password, 8);
};
