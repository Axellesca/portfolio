import { extendTheme } from '@chakra-ui/react';
import { mode, StyleFunctionProps } from '@chakra-ui/theme-tools';

export const theme = extendTheme({
  config: {
    initialColorMode: 'light',
  },
  styles: {
    global: {
      body: {
        bg: 'primary',
        fontFamily: 'Sen',
      },
    },
  },
  colors: {
    primary: '#E8E6D3',
    secondary: '#22253F',
  },
  sizes: {
    container: {
      ds: '1600px',
    },
  },
});
