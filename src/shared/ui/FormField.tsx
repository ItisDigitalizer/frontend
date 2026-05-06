import { useId } from 'react';
import { Box, Typography, TextField } from '@mui/material';
import type { TextFieldProps } from '@mui/material';

type Props = {
  label: string;
} & Omit<TextFieldProps, 'label'>;

export function FormField({ label, id, ...props }: Props) {
  const generatedId = useId();
  const fieldId = id ?? generatedId;

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.25 }}>
      <Typography component="label" htmlFor={fieldId} variant="body2" sx={{ px: 0.25, cursor: 'pointer' }}>
        {label}
      </Typography>

      <TextField id={fieldId} {...props} />
    </Box>
  );
}
