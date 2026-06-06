import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LogoutIcon from '@mui/icons-material/Logout';
import { Button } from '@mui/material';
import { useAuth, logout } from '@/entities/auth';
import { setAccessToken } from '@/shared/api';

export function LogoutButton() {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { logoutFromContext } = useAuth();

  const handleLogout = async () => {
    try {
      setIsLoading(true);
      await logout();
    } finally {
      setAccessToken(null);
      logoutFromContext();

      navigate('/templates', { replace: true });
      setIsLoading(false);
    }
  };

  return (
    <Button
      variant="text"
      color="error"
      startIcon={<LogoutIcon />}
      disabled={isLoading}
      onClick={handleLogout}
      sx={{
        position: 'absolute',
        top: 12,
        right: 12,
      }}
    >
      {isLoading ? 'Выход...' : 'Выйти'}
    </Button>
  );
}
