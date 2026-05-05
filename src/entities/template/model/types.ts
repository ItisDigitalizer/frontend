import type { TemplateField } from '@/entities/templateField';

export type Template = {
  id: number;
  name: string;
  description: string;
};

export type TemplateWithFields = {
  id: number;
  name: string;
  description: string;
  url: string;
  fields: TemplateField[];
};
