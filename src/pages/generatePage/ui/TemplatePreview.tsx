import { Box, Typography } from '@mui/material';
import { getTemplatePdfUrl } from '@/entities/template';
import type { TemplateWithFields } from '@/entities/template';
import { DocumentViewer } from '@/shared/ui';

type Props = {
  templateId: TemplateWithFields['id'];
};

export function TemplatePreview({ templateId }: Props) {
  const pdfUrl = getTemplatePdfUrl(templateId);

  return (
    <Box sx={{ width: '100%', maxWidth: 520, display: 'flex', flexDirection: 'column', gap: 2, textAlign: 'center' }}>
      <Typography component="h2" variant="h6">
        Просмотр шаблона документа
      </Typography>
      <Box sx={{ aspectRatio: '210 / 297', boxShadow: 4 }}>
        <DocumentViewer src={pdfUrl} />
      </Box>
    </Box>
  );
}
