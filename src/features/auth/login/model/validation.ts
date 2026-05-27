import { validateRequired } from '@/shared/lib/validation';

export const validatePassword = (password: string) => {
  return validateRequired(password, 'пароль');
};
