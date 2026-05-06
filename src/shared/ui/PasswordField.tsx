import { useState } from 'react';
import { IconButton, InputAdornment } from '@mui/material';
import type { TextFieldProps } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { FormField } from './FormField';

type Props = {
  label?: string;
} & Omit<TextFieldProps, 'type'>;

export function PasswordField({ label = 'Пароль', ...props }: Props) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <FormField
      {...props}
      label={label}
      type={showPassword ? 'text' : 'password'}
      slotProps={{
        input: {
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={() => setShowPassword((prev) => !prev)} edge="end">
                {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
              </IconButton>
            </InputAdornment>
          ),
        },
      }}
    />
  );
}
