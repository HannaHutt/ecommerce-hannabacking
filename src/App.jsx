
import './App.css'
import { ChakraProvider, Heading } from '@chakra-ui/react'
import { Navbar } from './Components/Navbar'
import {ItemListContainer} from './Components/ItemListContainer'

function App() {
  return (
    <ChakraProvider>
       
       <Navbar />
       <ItemListContainer greeting="Bienvenidos a Hanna Baking"  />
    </ChakraProvider>
  )
}

export default App
