import { Grid } from '@mui/material';
import type { Template } from '@/entities/template';
import { TemplateCard } from './TemplateCard';

type Props = {
  templates: Template[];
};

export function TemplatesList({ templates }: Props) {
  return (
    <Grid container spacing={3} sx={{ justifyContent: 'center' }}>
      {templates.map((template) => (
        <Grid key={template.id}>
          <TemplateCard template={template} />
        </Grid>
      ))}
    </Grid>
  );
}
