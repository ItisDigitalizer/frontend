import { Box, Button, Paper, Typography } from '@mui/material';
import { FormField, LinkText, PasswordField } from '@/shared/ui';
import { useFormValidation } from '@/shared/lib/validation';
import type { Validators } from '@/shared/lib/validation';
import { validateUsername, validatePassword } from '../model/validation';
import type { LoginFormValues } from '../model/types';

type Props = {
  onSubmit: (values: LoginFormValues) => void;
  isLoading?: boolean;
  error?: string | null;
};

const initialValues: LoginFormValues = {
  username: '',
  password: '',
};

const loginValidators: Validators<LoginFormValues> = {
  username: validateUsername,
  password: validatePassword,
};

export function LoginForm({ onSubmit, isLoading, error }: Props) {
  const { values, errors, touched, handleChange, handleBlur, validateForm } = useFormValidation({
    initialValues,
    validators: loginValidators,
  });

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateForm()) return;
    onSubmit(values);
  };

  return (
    <Paper
      component="form"
      onSubmit={handleSubmit}
      elevation={3}
      sx={{ width: 400, p: 5, display: 'flex', flexDirection: 'column', gap: 4, borderRadius: 2 }}
    >
      <Typography component="h1" variant="h3" color="primary" align="center">
        Вход
      </Typography>

      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
          <FormField
            label="Имя пользователя"
            placeholder="Введите имя пользователя"
            value={values.username}
            error={Boolean(touched.username && errors.username)}
            helperText={touched.username ? errors.username || ' ' : ' '}
            disabled={isLoading}
            onChange={(e) => handleChange('username', e.target.value)}
            onBlur={() => handleBlur('username')}
          />

          <PasswordField
            label="Пароль"
            placeholder="Введите пароль"
            value={values.password}
            error={Boolean(touched.password && errors.password)}
            helperText={touched.password ? errors.password || ' ' : ' '}
            disabled={isLoading}
            onChange={(e) => handleChange('password', e.target.value)}
            onBlur={() => handleBlur('password')}
          />
        </Box>

        {error && (
          <Typography color="error" variant="body2" align="center">
            {error}
          </Typography>
        )}

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <Button type="submit" variant="contained" fullWidth disabled={isLoading}>
            {isLoading ? 'Вход...' : 'Войти'}
          </Button>

          <Typography variant="body2" align="center">
            Еще нет аккаунта? <LinkText to="/register">Зарегистрироваться</LinkText>
          </Typography>
        </Box>
      </Box>
    </Paper>
  );
}
