import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { Typography } from '@mui/material';
import type { TypographyProps } from '@mui/material';

type Props = {
  children: ReactNode;
  to?: string;
  onClick?: () => void;
  variant?: TypographyProps['variant'];
};

export function LinkText({ children, to, onClick, variant = 'body2' }: Props) {
  return (
    <Typography
      component={to ? Link : 'span'}
      to={to}
      onClick={onClick}
      variant={variant}
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
