import { Outlet } from 'react-router-dom';
import { Box, Container } from '@mui/material';
import { Header } from '@/widgets/header';

export function MainLayout() {
  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header />
      <Box component="main" sx={{ px: 3, flex: 1, display: 'flex' }}>
        <Container maxWidth="lg" disableGutters sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
          <Outlet />
        </Container>
      </Box>
    </Box>
  );
}
