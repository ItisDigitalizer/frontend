import { getTemplatesApiV1TemplatesGet, getTemplateApiV1TemplatesTemplateIdGet } from '@/shared/api/generated';
import { mapTemplate, mapTemplateWithFields } from './templateMappers';

export async function getTemplates() {
  const response = await getTemplatesApiV1TemplatesGet();

  if (response.error || !response.data) {
    throw new Error('Ошибка загрузки шаблонов');
  }

  return response.data.map(mapTemplate);
}

export async function getTemplate(id: string) {
  const response = await getTemplateApiV1TemplatesTemplateIdGet({
    path: {
      template_id: id,
    },
  });

  if (response.error || !response.data) {
    throw new Error('Ошибка загрузки шаблона');
  }

  return mapTemplateWithFields(response.data);
}

export function getTemplatePdfUrl(templateId: string) {
  return `${import.meta.env.VITE_API_URL}/api/v1/templates/pdf/${templateId}`;
}
