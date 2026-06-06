import type { User } from '@/entities/user';

export type AuthState = {
  user: User | null;
  accessToken: string | null;
};

export type AuthContextValue = AuthState & {
  isAuth: boolean;
  loginToContext: (authState: AuthState) => void;
  logoutFromContext: () => void;
};
