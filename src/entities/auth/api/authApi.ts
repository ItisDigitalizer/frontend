import {
  registerApiV1AuthRegisterPost,
  loginApiV1AuthLoginPost,
  refreshApiV1AuthRefreshPost,
  logoutApiV1AuthLogoutPost,
} from '@/shared/api/generated';

export async function register(data: { username: string; email: string; password: string }) {
  const response = await registerApiV1AuthRegisterPost({
    body: data,
  });

  if (response.error || !response.data) {
    throw new Error('Ошибка регистрации');
  }

  return response.data;
}

export async function login(data: { username: string; password: string }) {
  const response = await loginApiV1AuthLoginPost({
    body: data,
  });

  if (response.error || !response.data) {
    throw new Error('Ошибка авторизации');
  }

  return response.data;
}

export async function refresh() {
  const response = await refreshApiV1AuthRefreshPost();

  if (response.error || !response.data) {
    throw new Error('Ошибка обновления токена');
  }

  return response.data;
}

export async function logout() {
  const response = await logoutApiV1AuthLogoutPost();

  if (response.error || !response.data) {
    throw new Error('Ошибка выхода');
  }

  return response.data;
}
