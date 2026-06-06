import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { RegisterForm } from '@/features/auth/register';
import type { RegisterFormValues } from '@/features/auth/register';
import { register } from '@/entities/auth';

export function RegisterPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleRegister = async ({ email, username, password }: RegisterFormValues) => {
    try {
      setError(null);
      setIsLoading(true);

      await register({
        username,
        email,
        password,
      });

      navigate('/register/success', { state: { email } });
    } catch {
      setError('Ошибка регистрации');
    } finally {
      setIsLoading(false);
    }
  };

  return <RegisterForm onSubmit={handleRegister} isLoading={isLoading} error={error} />;
}
