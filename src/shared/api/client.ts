import { client } from './generated/client.gen';

client.setConfig({
  baseUrl: import.meta.env.VITE_API_URL,
  credentials: 'include',
});

export { client };

export function setAccessToken(token: string | null) {
  client.setConfig({
    headers: {
      Authorization: token ? `Bearer ${token}` : undefined,
    },
  });
}
