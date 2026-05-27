import { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import { generationsMock } from '@/entities/generation';
import type { Generation } from '@/entities/generation';
import { GenerationList } from './GenerationList.tsx';
import { Loader, ErrorMessage } from '@/shared/ui';

export function GenerationHistory() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [generations, setGenerations] = useState<Generation[]>([]);

  // TODO: заменить на API
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      try {
        setGenerations(generationsMock);
      } catch {
        setError('Ошибка загрузки истории');
      } finally {
        setIsLoading(false);
      }
    }, 1000);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <Typography variant="h4" sx={{ px: 2.5 }}>
        История генераций
      </Typography>

      {isLoading ? (
        <Loader message="Загрузка истории..." />
      ) : error ? (
        <ErrorMessage message={error} />
      ) : generations.length === 0 ? (
        <Typography align="center" color="text.secondary" sx={{ textAlign: 'center', py: 10 }}>
          История генераций пуста
        </Typography>
      ) : (
        <>
          <Box sx={{ px: 2.5, py: 1 }}>
            <Box sx={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', maxWidth: 900, gap: 3 }}>
              <Typography>Название шаблона</Typography>
              <Typography>Дата генерации</Typography>
              <Typography>Документов</Typography>
            </Box>
          </Box>
          <GenerationList generations={generations} />
        </>
      )}
    </Box>
  );
}
