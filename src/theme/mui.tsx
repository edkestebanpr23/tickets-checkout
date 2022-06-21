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
  typography: {
    fontFamily: 'Arial',
    h3: {
      fontSize: '1.6rem',
      fontWeight: 600
    },
    h5: {
      fontSize: '1.3rem',
      fontWeight: 600
    },
    h6: {
      fontSize: '1.1rem',
      fontWeight: 600
    },
    h4: {
      fontSize: '1.4rem',
      fontWeight: 600
    },
    subtitle1: {
      fontWeight: 500
    }
  },
  components: {
    MuiGrid: {
      variants: [

      ]
    }
  }
});
