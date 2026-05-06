import { Link } from 'react-router-dom';
import { Box, Button, Typography } from '@mui/material';
import TabIcon from '@mui/icons-material/Tab';

export function HeaderLogo() {
  return (
    <Box
      component={Link}
      to="/templates"
      sx={{ display: 'flex', alignItems: 'center', gap: 2, textDecoration: 'none', color: 'inherit' }}
    >
      {/*TODO: заменить на логотип*/}
      <Button variant="contained" disableRipple disableElevation sx={{ width: 40, height: 40, p: 0, minWidth: 0 }}>
        <TabIcon />
      </Button>
      <Typography component="p" variant="h4">
        Цифровизатор
      </Typography>
    </Box>
  );
}
