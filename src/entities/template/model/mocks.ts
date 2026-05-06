import type { Template, TemplateWithFields } from './types';

export const templatesMock: Template[] = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1,
  name: `%Название шаблона ${i + 1}%`,
  description:
    '%Тут будет краткое описание шаблона Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation.%',
}));

export const templateMock: TemplateWithFields = {
  id: 1,
  name: '%Название шаблона%',
  description:
    '%Тут будет краткое описание шаблона Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation.%',

  url: '/mock/template.png',

  fields: [
    { id: 1, key: '{{key1}}', label: 'Ключ 1' },
    { id: 2, key: '{{key2}}', label: 'Ключ 2' },
    { id: 3, key: '{{key3}}', label: 'Ключ 3' },
    { id: 4, key: '{{key4}}', label: 'Ключ 4' },
    { id: 5, key: '{{key5}}', label: 'Ключ 5' },
    { id: 6, key: '{{key6}}', label: 'Ключ 6' },
    { id: 7, key: '{{key7}}', label: 'Ключ 7' },
    { id: 8, key: '{{key8}}', label: 'Ключ 8' },
    { id: 9, key: '{{key9}}', label: 'Ключ 9' },
    { id: 10, key: '{{key10}}', label: 'Ключ 10' },
  ],
};
