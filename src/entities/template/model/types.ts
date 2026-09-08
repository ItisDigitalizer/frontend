import type { TemplateField } from '@/entities/templateField';

export type Template = {
  id: string;
  name: string;
  description: string;
};

export type TemplateWithFields = Template & {
  fields: TemplateField[];
};
