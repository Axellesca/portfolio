import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import {mode,StyleFunctionProps} from '@chakra-ui/theme-tools'
import '../styles/globals.css'

const theme = extendTheme({
  styles:{
    global:{
      body:{
        bg:'#E8E6D3',
        fontFamily:'Sen',
      }
    }
  }
})


function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
