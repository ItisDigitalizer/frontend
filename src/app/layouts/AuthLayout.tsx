import { Outlet } from 'react-router-dom';
import { Box, Container } from '@mui/material';
import { BackButton } from '@/shared/ui';

export function AuthLayout() {
  return (
    <Box sx={{ minHeight: '100vh', px: 3, background: 'linear-gradient(180deg, #f9f9fd 0%, #E1E1F9 100%)' }}>
      <Container
        sx={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
        }}
      >
        <Box sx={{ position: 'absolute', top: 48, left: 0 }}>
          <BackButton />
        </Box>
        <Box sx={{ mt: '-8vh' }}>
          <Outlet />
        </Box>
      </Container>
    </Box>
  );
}
