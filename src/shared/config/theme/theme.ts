import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#2c2be6',
    },
    secondary: {
      main: '#8383ec',
    },
    background: {
      default: '#f9f9fd',
      paper: '#fff',
    },
    text: {
      primary: '#0a0a16',
      secondary: '#0a0a16b3',
    },
    error: {
      main: '#E5484D',
    },
    success: {
      main: '#22C55E',
    },
    //custom
    accent: {
      main: '#5353F3',
      light: '#7A7AF7',
      dark: '#3E3ED1',
      contrastText: '#fff',
    },
    soft: {
      main: '#F3F4FF',
      light: '#FAFAFF',
      dark: '#E7E9FF',
      contrastText: '#0a0a16',
    },
  },

  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1280,
      xl: 1536,
    },
  },

  shape: {
    borderRadius: 12,
  },

  typography: {
    h1: {
      fontSize: '2.8125rem',
      fontWeight: 600,
      lineHeight: 1.2,
      letterSpacing: '-0.02em',
    },

    h2: {
      fontSize: '2.25rem',
      fontWeight: 600,
      lineHeight: 1.25,
      letterSpacing: '-0.01em',
    },

    h3: {
      fontSize: '2rem',
      fontWeight: 600,
      lineHeight: 1.3,
      letterSpacing: '-0.005em',
    },

    h4: {
      fontSize: '1.75rem',
      fontWeight: 500,
      lineHeight: 1.35,
      letterSpacing: 0,
    },

    h5: {
      fontSize: '1.5rem',
      fontWeight: 500,
      lineHeight: 1.4,
      letterSpacing: '0.005em',
    },

    h6: {
      fontSize: '1.25rem',
      fontWeight: 500,
      lineHeight: 1.4,
      letterSpacing: '0.01em',
    },
  },

  components: {
    MuiButton: {
      styleOverrides: {
        sizeMedium: ({ theme }) => ({
          padding: `${theme.spacing(1)} ${theme.spacing(2)}`,
        }),
        root: {
          textTransform: 'none',
        },
      },
    },

    MuiTab: {
      styleOverrides: {
        root: {
          textTransform: 'none',
        },
      },
    },

    MuiTextField: {
      defaultProps: {
        variant: 'outlined',
        size: 'small',
        fullWidth: true,
      },
    },

    MuiOutlinedInput: {
      styleOverrides: {
        root: ({ theme }) => ({
          borderRadius: theme.spacing(0.5),
          backgroundColor: theme.palette.background.default,

          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: theme.palette.accent.light,
          },

          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: theme.palette.accent.main,
          },

          '&.Mui-error .MuiOutlinedInput-notchedOutline': {
            borderColor: theme.palette.error.main,
          },

          '&.Mui-error.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: theme.palette.error.main,
          },
        }),
      },
    },
  },
});
