import { Box, Typography } from '@mui/material';
import type { TemplateWithFields } from '@/entities/template';

type Props = {
  template: TemplateWithFields;
};

export function TemplatePreview({ template }: Props) {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, alignItems: 'center' }}>
      <Typography component="h2" variant="h6">
        Предпросмотр
      </Typography>
      {/* TODO: заменить на реальный viewer (PDF / iframe) */}
      <Box
        component="img"
        src={template.url}
        alt={template.name}
        sx={{ width: '100%', aspectRatio: '210 / 297', boxShadow: 4 }}
      />
    </Box>
  );
}
