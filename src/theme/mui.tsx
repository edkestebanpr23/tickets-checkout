import { createTheme } from '@mui/material/styles';

declare module '@mui/material/Grid' {
    interface GridPropsVariantOverrides {
      dashed: true;
    }
  }

export const theme = createTheme({
  palette: {
    primary: {
      main: '#01579b',
      light: '#4f83cc',
      dark: '#002f6c'
    },
    secondary: {
      main: '#1e88e5',
      light: '#6ab7ff',
      dark: '#005cb2'
    }
  },
  components: {
    MuiGrid: {
      variants: [

      ]
    }
  }
});
