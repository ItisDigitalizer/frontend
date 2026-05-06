import { Box, Typography } from '@mui/material';

type Props = {
  message?: string | null;
};

export function ErrorMessage({ message = 'Что-то пошло не так' }: Props) {
  return (
    <Box sx={{ textAlign: 'center', py: 10 }}>
      <Typography variant="h5" color="error">
        {message}
      </Typography>
    </Box>
  );
}
