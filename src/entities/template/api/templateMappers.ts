import type { DocumentTemplateRead, DocumentTemplateFieldRead } from '@/shared/api/generated';
import { mapTemplateField } from '@/entities/templateField';
import type { Template, TemplateWithFields } from '../model/types';

export function mapTemplate(dto: DocumentTemplateRead): Template {
  return {
    id: dto.id ?? '', // NOTE(API): id в OpenAPI схеме помечен как optional
    name: dto.name,
    description: dto.description,
  };
}

export function mapTemplateWithFields(dto: DocumentTemplateFieldRead): TemplateWithFields {
  return {
    id: dto.id ?? '', // NOTE(API): id в OpenAPI схеме помечен как optional
    name: dto.name,
    description: dto.description,
    fields: dto.fields.map(mapTemplateField),
  };
}
