import { useEffect, useState } from 'react';
import type { ReactNode } from 'react';
import { AuthContext } from '@/entities/auth';
import type { AuthContextValue, AuthState } from '@/entities/auth';
import { Loader } from '@/shared/ui';

type Props = {
  children: ReactNode;
};

export function AuthProvider({ children }: Props) {
  const [auth, setAuth] = useState<AuthState>({
    user: null,
    accessToken: null,
  });
  const [isInitialized, setIsInitialized] = useState(false);
  const isAuth = Boolean(auth.accessToken);

  const login = (authState: AuthState) => {
    setAuth(authState);
  };

  const logout = () => {
    setAuth({
      user: null,
      accessToken: null,
    });
  };

  // TODO: заменить на реальный API запрос
  useEffect(() => {
    const initializeAuth = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 1000));
      } catch {
        setAuth({
          user: null,
          accessToken: null,
        });
      } finally {
        setIsInitialized(true);
      }
    };

    void initializeAuth();
  }, []);

  const authContextValue: AuthContextValue = {
    ...auth,
    isAuth,
    login,
    logout,
  };

  if (!isInitialized) {
    return <Loader message="Загрузка приложения..." />;
  }

  return <AuthContext.Provider value={authContextValue}>{children}</AuthContext.Provider>;
}
