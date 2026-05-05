import { useEffect } from 'react';
import { Box, Paper, Typography, CircularProgress } from '@mui/material';

export function GenerateOverlay() {
  useEffect(() => {
    const originalOverflow = document.body.style.overflow;

    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, []);

  return (
    <Box
      sx={{
        position: 'fixed',
        inset: 0,
        bgcolor: 'rgba(0,0,0,0.6)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1000,
      }}
    >
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
        <CircularProgress size={128}></CircularProgress>

        <Typography component="h2" variant="h3">
          Генерация документа...
        </Typography>

        <Typography component="p" variant="h6" color="text.secondary" sx={{ fontWeight: 400 }}>
          Пожалуйста, подождите
        </Typography>
      </Paper>
    </Box>
  );
}
