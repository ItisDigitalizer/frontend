import { Box, Typography } from '@mui/material';
import type { TemplateWithFields } from '@/entities/template';

type Props = {
  template: TemplateWithFields;
};

export function TemplateInfo({ template }: Props) {
  return (
    <Box sx={{ maxWidth: 400, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 0.5 }}>
      <Typography component="h1" variant="h5" align="center">
        {template.name}
      </Typography>
      <Typography color="text.secondary" align="center">
        {template.description}
      </Typography>
    </Box>
  );
}
