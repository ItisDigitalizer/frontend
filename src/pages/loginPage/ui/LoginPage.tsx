import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { LoginForm } from '@/features/auth/login';
import type { LoginFormValues } from '@/features/auth/login';
import { useAuth, login as loginApi } from '@/entities/auth';
import { getMe } from '@/entities/user';
import { setAccessToken } from '@/shared/api';

export function LoginPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/profile';
  const { login } = useAuth();

  const handleLogin = async ({ username, password }: LoginFormValues) => {
    try {
      setError(null);
      setIsLoading(true);

      const tokens = await loginApi({
        username,
        password,
      });

      setAccessToken(tokens.access_token);

      const user = await getMe();

      login({
        user,
        accessToken: tokens.access_token,
      });

      navigate(from, { replace: true });
    } catch {
      setAccessToken(null);
      setError('Ошибка авторизации');
    } finally {
      setIsLoading(false);
    }
  };

  return <LoginForm onSubmit={handleLogin} isLoading={isLoading} error={error} />;
}
