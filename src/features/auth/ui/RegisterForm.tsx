import { Box, Button, Paper, Typography } from '@mui/material';
import { FormField, LinkText, PasswordField } from '@/shared/ui';

export function RegisterForm() {
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
        Регистрация
      </Typography>

      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
          <FormField label="Email" placeholder="name@example.com" helperText=" " />
          <FormField label="Имя пользователя" placeholder="John_Doe" helperText=" " />
          <PasswordField label="Пароль" placeholder="Не менее 7 символов" helperText=" " />
        </Box>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <Button type="submit" variant="contained" fullWidth>
            Зарегистрироваться
          </Button>

          <Typography variant="body2" align="center">
            Уже есть аккаунт? <LinkText to="/login">Войти</LinkText>
          </Typography>
        </Box>
      </Box>
    </Paper>
  );
}
