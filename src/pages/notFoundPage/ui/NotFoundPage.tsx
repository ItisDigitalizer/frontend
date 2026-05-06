import { LinkText } from '@/shared/ui';
import { Box, Typography } from '@mui/material';

export function NotFoundPage() {
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
      <Box>
        <Typography component="p" variant="h1" sx={{ fontSize: 96 }}>
          404
        </Typography>
        <Typography component="h1" variant="h2" color="text.secondary">
          Страница не найдена
        </Typography>
      </Box>

      <LinkText to="/templates">В каталог шаблонов</LinkText>
    </Box>
  );
}
