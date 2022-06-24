import { createTheme } from '@mui/material/styles';
import { lineHeight } from '@mui/system';

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
    fontFamily: 'Sans-serif',
    h3: {
      fontSize: '1.6rem',
      fontWeight: 550
    },
    h5: {
      fontSize: '1.3rem',
      fontWeight: 550
    },
    h6: {
      fontSize: '1.2rem',
      fontWeight: 550
    },
    h4: {
      fontSize: '1.4rem',
      fontWeight: 550
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
