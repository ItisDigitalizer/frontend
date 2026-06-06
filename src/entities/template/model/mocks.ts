import type { Template, TemplateWithFields } from './types';

export const templatesMock: Template[] = Array.from({ length: 12 }, (_, i) => ({
  id: `3fa85f64-5717-4562-b3fc-2c963f66af${String(i + 1).padStart(2, '0')}`,
  name: `%Название шаблона ${i + 1}%`,
  description:
    '%Тут будет краткое описание шаблона Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation.%',
}));

export const templateMock: TemplateWithFields = {
  id: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
  name: '%Название шаблона%',
  description:
    '%Тут будет краткое описание шаблона Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation.%',

  url: '/mock/template.pdf',

  fields: [
    { id: 'field-1', key: '{{key1}}', label: 'Ключ 1' },
    { id: 'field-2', key: '{{key2}}', label: 'Ключ 2' },
    { id: 'field-3', key: '{{key3}}', label: 'Ключ 3' },
    { id: 'field-4', key: '{{key4}}', label: 'Ключ 4' },
    { id: 'field-5', key: '{{key5}}', label: 'Ключ 5' },
    { id: 'field-6', key: '{{key6}}', label: 'Ключ 6' },
    { id: 'field-7', key: '{{key7}}', label: 'Ключ 7' },
    { id: 'field-8', key: '{{key8}}', label: 'Ключ 8' },
    { id: 'field-9', key: '{{key9}}', label: 'Ключ 9' },
    { id: 'field-10', key: '{{key10}}', label: 'Ключ 10' },
  ],
};
