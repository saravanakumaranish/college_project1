import {extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  styles: {
    global: () => ({
      "body": {
        bg: "#F0F8FF",
      },
    }),
  },
});


export default theme;

