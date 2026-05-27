import { validateRequired } from './validateRequired';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const validateEmail = (email: string) => {
  return validateRequired(email, 'email') || (!EMAIL_REGEX.test(email.trim()) ? 'Некорректный email' : '');
};
