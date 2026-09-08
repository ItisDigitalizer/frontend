import type { TemplateField as TemplateFieldDto } from '@/shared/api/generated';
import type { TemplateField } from '../model/types';

export function mapTemplateField(dto: TemplateFieldDto): TemplateField {
  return {
    id: dto.id ?? '', // NOTE(API): id в OpenAPI схеме помечен как optional
    key: dto.name,
    label: dto.description,
  };
}
