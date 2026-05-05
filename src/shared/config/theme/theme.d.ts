import '@mui/material/styles';
import '@mui/material/Button';

declare module '@mui/material/styles' {
  interface Palette {
    accent: Palette['primary'];
    soft: Palette['primary'];
  }

  interface PaletteOptions {
    accent?: PaletteOptions['primary'];
    soft?: PaletteOptions['primary'];
  }
}

declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    accent: true;
    soft: true;
  }
}

export {};
