import { Box, CircularProgress, Typography } from '@mui/material';

type Props = {
  message?: string;
};

export function Loader({ message }: Props) {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: message ? 2 : 0, py: 10 }}>
      <CircularProgress size={80} />
      {message && <Typography variant="h5">{message}</Typography>}
    </Box>
  );
}
