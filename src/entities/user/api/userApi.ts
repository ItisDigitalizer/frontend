import { meApiV1AuthMeGet } from '@/shared/api/generated';
import { mapUser } from './userMappers';
import type { User } from '../model/types';

export async function getMe(): Promise<User> {
  const response = await meApiV1AuthMeGet();

  if (response.error || !response.data) {
    throw new Error('Ошибка получения пользователя');
  }

  return mapUser(response.data);
}
