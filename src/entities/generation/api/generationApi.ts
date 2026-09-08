import {
  generateManualApiV1GenerateManualPost,
  generateFromExcelApiV1GenerateFromExcelPost,
  getProcessesApiV1ProcessesGet,
} from '@/shared/api/generated';
import { mapGeneration } from './generationMappers';

export async function generateManual(templateId: string, data: Record<string, string>) {
  const response = await generateManualApiV1GenerateManualPost({
    query: {
      template_id: templateId,
    },
    body: {
      data,
    },
  });

  if (response.error || !response.data) {
    throw new Error('Ошибка генерации документа');
  }

  return response.data;
}

export async function generateFromExcel(templateId: string, file: File) {
  const response = await generateFromExcelApiV1GenerateFromExcelPost({
    body: {
      template_id: templateId,
      excel_file: file,
    },
  });

  if (response.error || !response.data) {
    throw new Error('Ошибка генерации документа');
  }

  return response.data;
}

export async function getGenerations(userId: string) {
  const response = await getProcessesApiV1ProcessesGet({
    query: {
      user_id: userId,
    },
  });

  if (response.error || !response.data) {
    throw new Error('Ошибка загрузки истории генераций');
  }

  return response.data.map(mapGeneration);
}

export function getGeneratedDocumentPdfUrl(processId: string) {
  return `${import.meta.env.VITE_API_URL}/api/v1/documents/pdf?gen_process_id=${processId}`;
}

export function getGeneratedDocumentDownloadUrl(processId: string) {
  return `${import.meta.env.VITE_API_URL}/api/v1/generate/download/${processId}/`;
}
