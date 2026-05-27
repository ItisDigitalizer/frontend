import type { ReactNode } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from './ThemeProvider';
import { AuthProvider } from './AuthProvider';

type Props = {
  children: ReactNode;
};

export function AppProviders({ children }: Props) {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <AuthProvider>{children}</AuthProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}
