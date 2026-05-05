import { Link } from 'react-router-dom';
import { Box, Button, Typography } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export function HeaderUserProfile() {
  return (
    <Box
      component={Link}
      to="/profile"
      sx={{ display: 'flex', gap: 2, alignItems: 'center', textDecoration: 'none', color: 'accent.main' }}
    >
      <Typography component="p" variant="h5">
        Профиль
      </Typography>
      <Button variant="contained" color="accent" sx={{ width: 40, height: 40, p: 0, minWidth: 0, borderRadius: '50%' }}>
        <AccountCircleIcon />
      </Button>
    </Box>
  );
}
