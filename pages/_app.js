import { ChakraProvider } from '@chakra-ui/react'
 import styles from '../styles/globals.css'
 import theme from  '../theme/theme.js'

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  ) 
}
