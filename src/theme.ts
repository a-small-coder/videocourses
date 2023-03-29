import { extendTheme, ChakraTheme } from '@chakra-ui/react'
import { ComponentStyleConfig } from '@chakra-ui/theme'
import { mode } from '@chakra-ui/theme-tools'

const Heading: ComponentStyleConfig = {
  variants: {
    secondary: (props) => ({
      color: mode('gray.300', 'gray.600')(props),
    }),
  },
}

const components = { Heading }

const config: ChakraTheme['config'] = {
  initialColorMode: 'light',
  useSystemColorMode: false,
}

export const colors = {
  gradient: 'linear-gradient(102.83deg, #FDF59E 13.29%, #EE9EA4 50.64%, #9389BE 88.78%);',
  control: '#9389BE',
  control2: '#FDF59E',
  
}

export const scrollbar = {
  '&::-webkit-scrollbar': {
    width: '12px',
    borderRadius: '8px',
    backgroundColor: colors.control,
},
'&::-webkit-scrollbar-thumb': {
    borderRadius: '8px',
    backgroundColor: colors.control,
},
}

export const styles: ChakraTheme['styles'] = {
  global: (props) => ({
    'html, body, #root': {
      height: '100%',
    },
    body: {
      bg: mode('white', '#303030')(props),
    },
    colors
  }),
}



export default extendTheme({ config, styles, components })
