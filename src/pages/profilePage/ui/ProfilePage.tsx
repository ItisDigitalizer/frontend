import { Box, Typography, Divider } from '@mui/material';
import { UserCard } from './UserCard';
import { GenerationHistory } from './GenerationHistory';
import { userMock } from '@/entities/user/model/mocks';

export function ProfilePage() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', pt: 8, pb: 4 }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3 }}>
        <Typography component="h1" variant="h1">
          Профиль
        </Typography>
        {/* TODO: заменить на данные пользователя из auth */}
        <UserCard user={userMock} />
      </Box>
      <Divider sx={{ mt: 4, mb: 3 }} />
      <GenerationHistory />
    </Box>
  );
}
