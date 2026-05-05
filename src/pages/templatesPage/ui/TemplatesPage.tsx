import { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import type { Template } from '@/entities/template';
import { templatesMock } from '@/entities/template/model/mocks';
import { ErrorMessage, Loader } from '@/shared/ui';
import { TemplatesSearch } from './TemplatesSearch';
import { TemplatesList } from './TemplatesList';

export function TemplatesPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [templates, setTemplates] = useState<Template[]>([]);

  // TODO: заменить mock-данные на API запрос
  useEffect(() => {
    setTimeout(() => {
      try {
        setTemplates(templatesMock);
      } catch {
        setError('Ошибка загрузки шаблонов');
      } finally {
        setIsLoading(false);
      }
    }, 1000);
  }, []);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 8, py: 8 }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3 }}>
        <Typography component="h1" variant="h1" align="center">
          Каталог шаблонов
        </Typography>
        <TemplatesSearch />
      </Box>

      {isLoading ? (
        <Loader message="Загрузка шаблонов" />
      ) : error ? (
        <ErrorMessage message={error} />
      ) : (
        <TemplatesList templates={templates} />
      )}
    </Box>
  );
}
