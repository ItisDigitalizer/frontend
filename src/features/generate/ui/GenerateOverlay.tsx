import { Modal, Paper, Typography, CircularProgress } from '@mui/material';

export function GenerateOverlay() {
  return (
    <Modal open sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', p: 3 }}>
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
        <CircularProgress size={128} />

        <Typography component="h2" variant="h3">
          Генерация документа...
        </Typography>

        <Typography component="p" variant="h6" color="text.secondary" sx={{ fontWeight: 400 }}>
          Пожалуйста, подождите
        </Typography>
      </Paper>
    </Modal>
  );
}
