import { useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { Box, Paper, Typography, Button } from '@mui/material';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import DownloadOutlinedIcon from '@mui/icons-material/DownloadOutlined';
import { getGeneratedDocumentPdfUrl, getGeneratedDocumentDownloadUrl } from '@/entities/generation';
import { LinkText } from '@/shared/ui';
import { DocumentPreviewModal } from './DocumentPreviewModal';
import type { GenerateSuccessState } from '../model/types';

export function GenerateSuccessPage() {
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const location = useLocation();
  const state = location.state as GenerateSuccessState | null;
  const generationId = state?.generationId;
  const templateId = state?.templateId;

  if (!generationId) {
    return <Navigate to="/templates" replace />;
  }

  const pdfUrl = getGeneratedDocumentPdfUrl(generationId);
  const downloadUrl = getGeneratedDocumentDownloadUrl(generationId);

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
            component="a"
            href={downloadUrl}
            variant="contained"
            fullWidth
            startIcon={<DownloadOutlinedIcon />}
            sx={{ fontSize: 18 }}
          >
            Скачать
          </Button>
        </Box>

        <Box sx={{ display: 'flex', gap: 3 }}>
          <LinkText to="/templates">Вернуться в каталог</LinkText>
          <LinkText to={`/generate/${templateId}`}>Сгенерировать ещё</LinkText>
        </Box>
      </Paper>

      <DocumentPreviewModal src={pdfUrl} open={isViewerOpen} onClose={() => setIsViewerOpen(false)} />
    </Box>
  );
}
