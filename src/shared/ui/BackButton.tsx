import { useNavigate } from 'react-router-dom';
import { IconButton } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export function BackButton() {
  const navigate = useNavigate();

  return (
    <IconButton onClick={() => navigate(-1)}>
      <ArrowBackIcon />
    </IconButton>
  );
}
