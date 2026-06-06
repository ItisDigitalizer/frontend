import { useEffect, useState } from 'react';
import type { ReactNode } from 'react';
import { AuthContext, refresh } from '@/entities/auth';
import { getMe } from '@/entities/user';
import type { AuthContextValue, AuthState } from '@/entities/auth';
import { Loader } from '@/shared/ui';
import { setAccessToken } from '@/shared/api';

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

  const loginToContext = (authState: AuthState) => {
    setAuth(authState);
  };

  const logoutFromContext = () => {
    setAuth({
      user: null,
      accessToken: null,
    });
  };

  useEffect(() => {
    const initializeAuth = async () => {
      try {
        const tokens = await refresh();

        setAccessToken(tokens.access_token);

        const user = await getMe();

        loginToContext({
          user,
          accessToken: tokens.access_token,
        });
      } catch {
        setAccessToken(null);
        logoutFromContext();
      } finally {
        setIsInitialized(true);
      }
    };

    void initializeAuth();
  }, []);

  const authContextValue: AuthContextValue = {
    ...auth,
    isAuth,
    loginToContext,
    logoutFromContext,
  };

  if (!isInitialized) {
    return <Loader message="Загрузка приложения..." />;
  }

  return <AuthContext.Provider value={authContextValue}>{children}</AuthContext.Provider>;
}
