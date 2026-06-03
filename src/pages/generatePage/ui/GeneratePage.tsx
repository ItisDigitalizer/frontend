import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
import { GenerateForm, GenerateOverlay } from '@/features/generate';
import type { GenerateSubmitData } from '@/features/generate';
import { useAuth } from '@/entities/auth';
import { templateMock } from '@/entities/template';
import type { TemplateWithFields } from '@/entities/template';
import { ErrorMessage, Loader, LinkText } from '@/shared/ui';
import { TemplateInfo } from './TemplateInfo';
import { TemplatePreview } from './TemplatePreview.tsx';

export function GeneratePage() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [template, setTemplate] = useState<TemplateWithFields | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [generateError, setGenerateError] = useState<string | null>(null);
  const { id } = useParams();
  const navigate = useNavigate();
  const { isAuth } = useAuth();
  void id;

  // TODO: заменить на реальный API вызов генерации
  const handleGenerate = async (data: GenerateSubmitData) => {
    try {
      setGenerateError(null);
      setIsGenerating(true);

      console.log(data);
      await new Promise((resolve) => setTimeout(resolve, 2000));

      const isSuccess = Math.random() > 0.5;
      if (isSuccess) {
        navigate('/generate/success', { state: { generationId: '123' } });
        return;
      }
      setGenerateError('Ошибка генерации документа');
    } catch (error) {
      console.error(error);
      setGenerateError('Ошибка генерации документа');
    } finally {
      setIsGenerating(false);
    }
  };

  // TODO: заменить mock-данные на API запрос по id
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      try {
        setTemplate(templateMock);
      } catch {
        setError('Ошибка загрузки шаблона');
      } finally {
        setIsLoading(false);
      }
    }, 1000);

    return () => clearTimeout(timeoutId);
  }, []);

  if (isLoading) {
    return <Loader message="Загрузка шаблона..." />;
  }

  if (error || !template) {
    return <ErrorMessage message={error} />;
  }

  return (
    <>
      <Box sx={{ display: 'flex', justifyContent: 'space-around', gap: 4, py: 8, flexWrap: 'wrap' }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3 }}>
          <TemplateInfo template={template} />
          <GenerateForm template={template} error={generateError} onSubmit={handleGenerate} />
          {!isAuth && (
            <Typography color="text.secondary" align="center">
              <LinkText to="/login" variant="body1">
                Войдите в аккаунт
              </LinkText>{' '}
              для сохранения истории генераций
            </Typography>
          )}
        </Box>
        <TemplatePreview template={template} />
      </Box>
      {isGenerating && <GenerateOverlay />}
    </>
  );
}
