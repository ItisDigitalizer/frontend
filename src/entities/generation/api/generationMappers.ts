import type { GenerationProcessRead } from '@/shared/api/generated';
import type { Generation } from '../model/types';

export function mapGeneration(dto: GenerationProcessRead): Generation {
  return {
    id: dto.id ?? '', // NOTE(API): id помечен как optional в OpenAPI
    templateName: dto.template?.name ?? 'Без названия',
    createdAt: dto.created_at ?? '',
  };
}
