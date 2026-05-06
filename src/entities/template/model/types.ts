import type { TemplateField } from '@/entities/templateField';

export type Template = {
  id: number;
  name: string;
  description: string;
};

export type TemplateWithFields = Template & {
  url: string;
  fields: TemplateField[];
};
