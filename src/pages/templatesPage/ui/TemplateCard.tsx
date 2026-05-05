import { Link } from 'react-router-dom';
import { Box, Button, Typography } from '@mui/material';
import type { Template } from '@/entities/template';

type Props = {
  template: Template;
};

export function TemplateCard({ template }: Props) {
  return (
    <Box
      sx={{
        width: 300,
        height: 200,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        border: '1px solid',
        borderColor: 'accent.light',
        borderRadius: 1,
        p: 2,
        bgcolor: 'background.paper',
        transition: 'all 0.2s ease',
        '&:hover': {
          borderColor: 'accent.main',
          boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
        },
      }}
    >
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
        <Typography component="h2" variant="h6" align="center">
          {template.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {template.description}
        </Typography>
      </Box>

      <Button variant="contained" color="accent" component={Link} to={`/generate/${template.id}`} fullWidth>
        Использовать
      </Button>
    </Box>
  );
}
