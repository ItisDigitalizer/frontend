import { Box, Typography, Divider } from '@mui/material';
import { useAuth } from '@/entities/auth';
import { UserCard } from './UserCard';
import { GenerationHistory } from './GenerationHistory';

export function ProfilePage() {
  const { user } = useAuth();

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', pt: 8, pb: 4 }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3 }}>
        <Typography component="h1" variant="h1">
          Профиль
        </Typography>
        {user && <UserCard user={user} />}
      </Box>
      <Divider sx={{ mt: 4, mb: 3 }} />
      <GenerationHistory />
    </Box>
  );
}
