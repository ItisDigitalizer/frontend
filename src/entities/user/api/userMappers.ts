import type { UserRead } from '@/shared/api/generated';
import type { User } from '../model/types';

export function mapUser(dto: UserRead): User {
  return {
    id: dto.id ?? '', // NOTE(API): id в OpenAPI схеме помечен как optional
    username: dto.username,
    email: dto.email,
  };
}
