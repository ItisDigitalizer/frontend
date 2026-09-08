import type { User } from '@/entities/user';

export type AuthState = {
  user: User | null;
  accessToken: string | null;
};

export type AuthContextValue = AuthState & {
  isAuth: boolean;
  login: (authState: AuthState) => void;
  logout: () => void;
};
