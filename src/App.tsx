import * as React from 'react'

import { Box, ChakraProvider } from '@chakra-ui/react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import CatalogPage from './pages/Catalog'

function App() {
  return (
    <Box w='100%' h='100%'>
      <Routes>
        <Route 
          path='/'
          element={<Home/>}
        />
        <Route 
          path='/catalog'
          element={<CatalogPage/>}
        />
      </Routes>
    </Box>
  )
}

export default App