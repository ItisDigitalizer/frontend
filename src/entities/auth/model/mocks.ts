import { userMock } from '@/entities/user';
import type { AuthState } from './types';

export const authMock: AuthState = {
  accessToken: 'fake-access-token',
  user: userMock,
};
