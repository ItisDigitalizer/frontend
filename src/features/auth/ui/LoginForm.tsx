import { Box, Button, Paper, Typography } from '@mui/material';
import { FormField, LinkText, PasswordField } from '@/shared/ui';

export function LoginForm() {
  // TODO: заменить на реальную обработку ошибок авторизации
  const error: string | null = null;

  return (
    <Paper
      component="form"
      //TODO: работа с формой
      onSubmit={(e) => {
        e.preventDefault();
      }}
      elevation={3}
      sx={{ width: 400, p: 5, display: 'flex', flexDirection: 'column', gap: 4, borderRadius: 2 }}
    >
      <Typography component="h1" variant="h3" color="primary" align="center">
        Вход
      </Typography>

      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
          <FormField label="Email" placeholder="Введите email" helperText=" " />

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
            <PasswordField label="Пароль" placeholder="Введите пароль" />
            {/* TODO: реализовать страницу восстановления пароля */}
            <LinkText to="#">Забыли пароль?</LinkText>
          </Box>
        </Box>

        {error && (
          <Typography color="error" variant="body2" align="center">
            {error}
          </Typography>
        )}

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <Button type="submit" variant="contained" fullWidth>
            Войти
          </Button>

          <Typography variant="body2" align="center">
            Еще нет аккаунта? <LinkText to="/register">Зарегистрироваться</LinkText>
          </Typography>
        </Box>
      </Box>
    </Paper>
  );
}
