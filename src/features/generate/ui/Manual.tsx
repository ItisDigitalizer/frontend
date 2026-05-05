import { Box } from '@mui/material';
import type { TemplateField } from '@/entities/templateField';
import { customScrollbar } from '@/shared/lib';
import { FormField } from '@/shared/ui';

type Props = {
  fields: TemplateField[];
};

export function Manual({ fields }: Props) {
  return (
    <Box
      sx={{
        bgcolor: 'soft.main',
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        maxHeight: 400,
        px: 2.5,
        py: 3,
        borderRadius: 1,
        overflow: 'auto',
        ...customScrollbar,
      }}
    >
      <FormField label="Имя файла" placeholder="Введите имя файла" />

      {fields.map((field) => (
        <FormField key={field.id} label={field.label} placeholder={field.key} />
      ))}
    </Box>
  );
}
