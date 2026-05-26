import { Box, Button, Paper, Typography } from '@mui/material';
import { FormField, LinkText, PasswordField } from '@/shared/ui';
import { useFormValidation, validateEmail } from '@/shared/lib/validation';
import type { Validators } from '@/shared/lib/validation';
import { validatePassword, validateUsername } from '../model/validation';
import type { RegisterFormValues } from '../model/types';

type Props = {
  onSubmit: (values: RegisterFormValues) => void;
  isLoading?: boolean;
  error?: string | null;
};

const initialValues: RegisterFormValues = {
  email: '',
  username: '',
  password: '',
};

const registerValidators: Validators<RegisterFormValues> = {
  email: validateEmail,
  username: validateUsername,
  password: validatePassword,
};

export function RegisterForm({ onSubmit, isLoading, error }: Props) {
  const { values, errors, touched, handleChange, handleBlur, validateForm } = useFormValidation({
    initialValues: initialValues,
    validators: registerValidators,
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
        Регистрация
      </Typography>

      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
          <FormField
            label="Email"
            placeholder="name@example.com"
            value={values.email}
            error={Boolean(touched.email && errors.email)}
            helperText={touched.email ? errors.email || ' ' : ' '}
            disabled={isLoading}
            onChange={(e) => handleChange('email', e.target.value)}
            onBlur={() => handleBlur('email')}
          />

          <FormField
            label="Имя пользователя"
            placeholder="John_Doe"
            value={values.username}
            error={Boolean(touched.username && errors.username)}
            helperText={touched.username ? errors.username || ' ' : ' '}
            disabled={isLoading}
            onChange={(e) => handleChange('username', e.target.value)}
            onBlur={() => handleBlur('username')}
          />

          <PasswordField
            label="Пароль"
            placeholder="Не менее 8 символов"
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
            {isLoading ? 'Регистрация...' : 'Зарегистрироваться'}
          </Button>

          <Typography variant="body2" align="center">
            Уже есть аккаунт? <LinkText to="/login">Войти</LinkText>
          </Typography>
        </Box>
      </Box>
    </Paper>
  );
}
