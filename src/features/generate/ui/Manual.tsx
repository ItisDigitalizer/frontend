import { Box } from '@mui/material';
import type { TemplateField } from '@/entities/templateField';
import { customScrollbar, formatTemplateKey } from '@/shared/lib';
import { FormField } from '@/shared/ui';
import type { GenerateManualData } from '../model/types';

type Props = {
  fields: TemplateField[];
  values: GenerateManualData;
  onChange: (values: GenerateManualData) => void;
};

export function Manual({ fields, values, onChange }: Props) {
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
      {fields.map((field) => (
        <FormField
          key={field.id}
          label={formatTemplateKey(field.key)}
          placeholder={field.label}
          value={values[field.key] ?? ''}
          onChange={(e) => onChange({ ...values, [field.key]: e.target.value })}
        />
      ))}
    </Box>
  );
}
