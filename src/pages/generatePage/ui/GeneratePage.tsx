import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Box } from '@mui/material';
import { GenerateForm, GenerateOverlay } from '@/features/generate';
import { templateMock } from '@/entities/template';
import type { TemplateWithFields } from '@/entities/template';
import { ErrorMessage, Loader } from '@/shared/ui';
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
  void id;

  // TODO: заменить на реальный API вызов генерации
  const handleGenerate = () => {
    setGenerateError(null);
    setIsGenerating(true);
    setTimeout(() => {
      const isSuccess = Math.random() > 0.5;
      if (isSuccess) {
        navigate('/generate/success');
      } else {
        setGenerateError('Ошибка генерации документа');
        setIsGenerating(false);
      }
    }, 2000);
  };

  // TODO: заменить mock-данные на API запрос по id
  useEffect(() => {
    setTimeout(() => {
      try {
        setTemplate(templateMock);
      } catch {
        setError('Ошибка загрузки шаблона');
      } finally {
        setIsLoading(false);
      }
    }, 1000);
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
          <GenerateForm
            template={template}
            onSubmit={handleGenerate}
            error={generateError}
            clearError={() => setGenerateError(null)}
          />
        </Box>
        <Box sx={{ maxWidth: 540 }}>
          <TemplatePreview template={template} />
        </Box>
      </Box>
      {isGenerating && <GenerateOverlay />}
    </>
  );
}
