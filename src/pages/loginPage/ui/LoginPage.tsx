import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { LoginForm } from '@/features/auth/login';
import type { LoginFormValues } from '@/features/auth/login';
import { useAuth, authMock } from '@/entities/auth';

export function LoginPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/profile';
  const { login } = useAuth();

  // TODO: заменить на реальный API запрос
  const handleLogin = async ({ email, password }: LoginFormValues) => {
    try {
      setError(null);
      setIsLoading(true);

      console.log(email, password);
      await new Promise((resolve) => setTimeout(resolve, 1000));

      login(authMock);
      navigate(from, { replace: true });
    } catch (error) {
      console.error(error);
      setError('Ошибка авторизации');
    } finally {
      setIsLoading(false);
    }
  };

  return <LoginForm onSubmit={handleLogin} isLoading={isLoading} error={error} />;
}
