import { Box, Container } from '@mui/material';
import { HeaderLogo } from './HeaderLogo';
import { HeaderAuthActions } from './HeaderAuthActions';
import { HeaderUserProfile } from './HeaderUserProfile';

export function Header() {
  // TODO: заменить на useAuth() после подключения авторизации
  const isAuth = false;

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
