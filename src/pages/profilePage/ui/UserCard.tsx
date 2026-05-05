import { Paper, Typography, Box, Button } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import type { User } from '@/entities/user';

type Props = {
  user: User;
};

export function UserCard({ user }: Props) {
  return (
    <Paper
      sx={{
        maxWidth: 400,
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 3,
        p: 4,
        borderRadius: 1,
        position: 'relative',
      }}
    >
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <AccountCircleIcon color="secondary" sx={{ fontSize: 64 }} />
        <Typography component="p" variant="h5" align="center">
          {user.username}
        </Typography>
        <Typography color="text.secondary" align="center">
          {user.email}
        </Typography>
      </Box>

      {/* TODO: реализовать действия */}
      <Box sx={{ display: 'flex', gap: 2 }}>
        <Button variant="contained" color="accent">
          Редактировать
        </Button>
        <Button variant="outlined">Сменить пароль</Button>
      </Box>

      {/* TODO: вынести в features? */}
      <Button variant="text" color="error" startIcon={<LogoutIcon />} sx={{ position: 'absolute', top: 12, right: 12 }}>
        Выйти
      </Button>
    </Paper>
  );
}
