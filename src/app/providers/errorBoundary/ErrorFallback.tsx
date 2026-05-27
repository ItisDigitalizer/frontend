import { Link } from 'react-router-dom';
import { Box, Typography, Button } from '@mui/material';
import ErrorOutlinedIcon from '@mui/icons-material/ErrorOutlined';
import RefreshIcon from '@mui/icons-material/Refresh';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';

export function ErrorFallback() {
  return (
    <Box
      component="main"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 3,
        textAlign: 'center',
      }}
    >
      <ErrorOutlinedIcon sx={{ fontSize: 96, color: 'error.main' }} />

      <Box>
        <Typography component="h1" variant="h2">
          Упс! Что-то пошло не так
        </Typography>
        <Typography color="text.secondary" sx={{ mt: 1 }}>
          Попробуйте обновить страницу или вернуться в каталог
        </Typography>
      </Box>

      <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', justifyContent: 'center' }}>
        <Button variant="contained" startIcon={<RefreshIcon />} onClick={() => window.location.reload()}>
          Обновить
        </Button>
        <Button component={Link} to="/templates" variant="outlined" startIcon={<DescriptionOutlinedIcon />}>
          В каталог
        </Button>
      </Box>
    </Box>
  );
}
