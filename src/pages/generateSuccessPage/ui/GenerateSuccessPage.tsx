import { useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { Box, Paper, Typography, Button } from '@mui/material';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import DownloadOutlinedIcon from '@mui/icons-material/DownloadOutlined';
import { LinkText } from '@/shared/ui';
import { DocumentPreviewModal } from './DocumentPreviewModal';
import type { GenerateSuccessState } from '../model/types';

export function GenerateSuccessPage() {
  const location = useLocation();
  const generationId = (location.state as GenerateSuccessState | null)?.generationId;
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadError, setDownloadError] = useState<string | null>(null);

  if (!generationId) {
    return <Navigate to="/templates" replace />;
  }

  // TODO: заменить на API запрос
  const handleDownload = async () => {
    try {
      setDownloadError(null);
      setIsDownloading(true);

      console.log(generationId);
      await new Promise((resolve) => setTimeout(resolve, 1000));
    } catch (error) {
      console.error(error);
      setDownloadError('Ошибка скачивания документа');
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', py: 10 }}>
      <Paper
        sx={{
          width: '100%',
          maxWidth: 600,
          minHeight: 300,
          p: 4,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 2,
          borderRadius: 2,
        }}
      >
        <CheckCircleOutlineOutlinedIcon sx={{ fontSize: 96, color: 'success.main', opacity: 0.8 }} />

        <Typography component="h1" variant="h3" align="center">
          Документ сгенерирован
        </Typography>

        <Box sx={{ width: '100%', maxWidth: 360, display: 'flex', flexDirection: 'column', gap: 1 }}>
          <Button
            variant="outlined"
            fullWidth
            startIcon={<VisibilityOutlinedIcon />}
            onClick={() => setIsViewerOpen(true)}
            sx={{ fontSize: 18 }}
          >
            Посмотреть
          </Button>

          <Button
            variant="contained"
            fullWidth
            startIcon={<DownloadOutlinedIcon />}
            onClick={handleDownload}
            disabled={isDownloading}
            sx={{ fontSize: 18 }}
          >
            {isDownloading ? 'Скачивание...' : 'Скачать'}
          </Button>
        </Box>

        {downloadError && (
          <Typography color="error" align="center">
            {downloadError}
          </Typography>
        )}

        <Box sx={{ display: 'flex', gap: 3 }}>
          <LinkText to="/templates">Вернуться в каталог</LinkText>
          <LinkText to="/generate/1">Сгенерировать ещё</LinkText>
        </Box>
      </Paper>

      <DocumentPreviewModal
        src="/mock/generated_document1.pdf"
        open={isViewerOpen}
        onClose={() => setIsViewerOpen(false)}
      />
    </Box>
  );
}
