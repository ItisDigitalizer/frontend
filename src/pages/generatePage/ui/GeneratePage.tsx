import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
import { GenerateForm, GenerateOverlay } from '@/features/generate';
import type { GenerateSubmitData } from '@/features/generate';
import { useAuth } from '@/entities/auth';
import { getTemplate } from '@/entities/template';
import { generateManual, generateFromExcel } from '@/entities/generation';
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

  const handleGenerate = async (data: GenerateSubmitData) => {
    if (!template) {
      return;
    }

    try {
      setGenerateError(null);
      setIsGenerating(true);

      let result;

      if (data.mode === 'manual') {
        result = await generateManual(template.id, data.data);
      } else {
        result = await generateFromExcel(template.id, data.data.file);
      }

      navigate('/generate/success', { state: { generationId: result.process_id, templateId: template.id } });
    } catch {
      setGenerateError('Ошибка генерации документа');
    } finally {
      setIsGenerating(false);
    }
  };

  useEffect(() => {
    if (!id) {
      setError('Ошибка загрузки шаблона');
      setIsLoading(false);
      return;
    }

    const loadTemplate = async () => {
      try {
        const template = await getTemplate(id);
        setTemplate(template);
      } catch {
        setError('Ошибка загрузки шаблона');
      } finally {
        setIsLoading(false);
      }
    };

    void loadTemplate();
  }, [id]);

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
        <TemplatePreview templateId={template.id} />
      </Box>
      {isGenerating && <GenerateOverlay />}
    </>
  );
}
