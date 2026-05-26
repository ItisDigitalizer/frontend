import { Box, Container } from '@mui/material';
import { useAuth } from '@/entities/auth';
import { HeaderLogo } from './HeaderLogo';
import { HeaderAuthActions } from './HeaderAuthActions';
import { HeaderUserProfile } from './HeaderUserProfile';

export function Header() {
  const { isAuth } = useAuth();

  return (
    <Box component="header" sx={{ bgcolor: 'background.paper', px: 3 }}>
      <Container
        maxWidth="lg"
        disableGutters
        sx={{ height: 64, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
      >
        <HeaderLogo />
        {isAuth ? <HeaderUserProfile /> : <HeaderAuthActions />}
      </Container>
    </Box>
  );
}
