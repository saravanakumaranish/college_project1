import { ChakraProvider } from '@chakra-ui/react'
 import styles from '../styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  ) 
}
