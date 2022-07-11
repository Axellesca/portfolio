import { extendTheme, useColorModeValue } from '@chakra-ui/react';
import { mode, StyleFunctionProps } from '@chakra-ui/theme-tools';

export const theme = extendTheme({
  config: {
    initialColorMode: 'light',
    useSystemColorMode: false,
  },
  styles: {
    global: (props) => ({
      body: {
        fontFamily: 'Sen',
        bg: mode('light', '#22253F')(props),
      },
      'html,body, #__next': {
        height: '100%',
      },
    }),
  },
  colors: {
    light: '#E8E6D3',
    dark: '#22253F',
  },
  sizes: {
    container: {
      ds: '1600px',
    },
  },
});
