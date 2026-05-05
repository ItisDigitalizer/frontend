import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { Typography } from '@mui/material';

type Props = {
  children: ReactNode;
  to?: string;
  onClick?: () => void;
};

export function LinkText({ children, to, onClick }: Props) {
  return (
    <Typography
      component={to ? Link : 'span'}
      to={to}
      onClick={onClick}
      variant="body2"
      sx={{
        display: 'inline',
        color: 'primary.main',
        cursor: 'pointer',
        textDecoration: 'none',
        transition: 'text-decoration 0.2s ease',
        '&:hover': {
          textDecoration: 'underline',
        },
      }}
    >
      {children}
    </Typography>
  );
}
