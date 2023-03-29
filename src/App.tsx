import * as React from 'react'

import { Box, ChakraProvider } from '@chakra-ui/react'
import theme from './theme'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'

function App() {
  return (
    <Box w='100%' h='100%'>
      <Routes>
        <Route 
          path='/'
          element={<Home/>}
        />
      </Routes>
    </Box>
  )
}

export default App