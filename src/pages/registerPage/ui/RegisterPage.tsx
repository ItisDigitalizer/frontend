import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { RegisterForm } from '@/features/auth/register';
import type { RegisterFormValues } from '@/features/auth/register';
import { useAuth, authMock } from '@/entities/auth';

export function RegisterPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();
  const { login } = useAuth();

  // TODO: заменить на реальный API запрос
  const handleRegister = async ({ email, username, password }: RegisterFormValues) => {
    try {
      setError(null);
      setIsLoading(true);

      console.log(email, username, password);
      await new Promise((resolve) => setTimeout(resolve, 1000));

      login(authMock);
      navigate('/profile', { replace: true });
    } catch (error) {
      console.error(error);
      setError('Ошибка регистрации');
    } finally {
      setIsLoading(false);
    }
  };

  return <RegisterForm onSubmit={handleRegister} isLoading={isLoading} error={error} />;
}
