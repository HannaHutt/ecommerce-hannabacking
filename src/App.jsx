
import './App.css'
import { ChakraProvider, Heading } from '@chakra-ui/react'
import { Navbar } from './Components/Navbar'
import {ItemListContainer} from './Components/ItemListContainer'
import { ItemDetailContainer } from "./Components/ItemDetailContainer"
import {BrowserRouter, Routes, Route} from "react-router-dom"

function App() {
  return (
    <ChakraProvider>
      <BrowserRouter >
        <Navbar />
          <Routes>

             <Route path="/" element={<ItemListContainer greeting="Bienvenidos a Hanna Baking"  />} />
             <Route path="/category/:category" element={<ItemListContainer greeting= "Bienvenidos a Hanna Baking" /> } />
             <Route path="/Contacto/:contact" element={<ItemListContainer greeting= "Bienvenidos a Hanna Baking" /> } />
             <Route path="/Nosotros/:about" element={<ItemListContainer greeting= "Bienvenidos a Hanna Baking" /> } />
             <Route path="/Productos/:products" element={<ItemListContainer greeting= "Bienvenidos a Hanna Baking" /> } />
             <Route path="/category/torta/product/:id"element={<ItemDetailContainer /> } />
             <Route path="/category/tarta/product/:id"element={<ItemDetailContainer /> } />
             <Route path="/product/:id" element={<ItemDetailContainer /> } />

          </Routes>
       
      
      </BrowserRouter>
      
       
    </ChakraProvider>
  )
}

export default App
