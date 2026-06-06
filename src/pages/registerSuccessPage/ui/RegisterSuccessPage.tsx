import { Box, Paper, Typography, Button } from '@mui/material';
import { useLocation, Navigate, useNavigate } from 'react-router-dom';
import type { RegisterSuccessState } from '../model/types';

export function RegisterSuccessPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const email = (location.state as RegisterSuccessState | null)?.email;

  if (!email) {
    return <Navigate to="/register" replace />;
  }

  return (
    <Paper
      sx={{
        width: '100%',
        maxWidth: 520,
        p: 5,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 3,
        borderRadius: 2,
      }}
    >
      <Typography component="h1" variant="h4" align="center" color="primary">
        Подтвердите почту
      </Typography>

      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
        <Typography variant="body1">
          Для завершения регистрации перейдите по ссылке из письма, отправленного на:{' '}
        </Typography>
        <Typography component="span" variant="h6" align="center" sx={{ wordBreak: 'break-word' }}>
          {email}
        </Typography>
        <Typography variant="body1">Если вы не получили письмо, проверьте папку «Спам».</Typography>
      </Box>

      <Button variant="contained" fullWidth onClick={() => navigate('/login')}>
        Перейти ко входу
      </Button>
    </Paper>
  );
}
