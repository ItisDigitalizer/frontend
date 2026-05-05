import { Link } from 'react-router-dom';
import { Box, Button } from '@mui/material';

export function HeaderAuthActions() {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
      <Button variant="contained" component={Link} to="/register">
        Регистрация
      </Button>
      <Button variant="contained" color="soft" component={Link} to="/login">
        Вход
      </Button>
    </Box>
  );
}
