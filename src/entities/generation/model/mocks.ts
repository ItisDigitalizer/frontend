import type { Generation } from './types';

export const generationsMock: Generation[] = Array.from({ length: 10 }, (_, i) => ({
  id: String(i + 1),
  templateName: `%Название шаблона ${i + 1}%`,
  createdAt: new Date(Date.now() - i * 86400000).toISOString(),
}));
