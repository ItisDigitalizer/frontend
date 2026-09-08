import { validateRequired } from '@/shared/lib/validation';

export const validateUsername = (username: string) => {
  return validateRequired(username, 'имя пользователя');
};

export const validatePassword = (password: string) => {
  return validateRequired(password, 'пароль');
};
