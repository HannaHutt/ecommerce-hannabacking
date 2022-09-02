import { Heading, Text, Center, HStack, Flex } from '@chakra-ui/react'
import { products } from '../../utils/products'
import { customFetch } from '../../utils/customFetch'
import { useState, useEffect } from 'react'
import { ItemList } from '../ItemList'
import { useParams } from 'react-router-dom'
import { collection, getDocs } from 'firebase/firestore'
import {db} from '../../Firebase'




const ItemListContainer = ({ greeting }) => {
   
   const [listProduct, setListProduct] = useState([])
   const [loading, setLoading] = useState(true)
   
   const { category } = useParams()
   
   
   useEffect(() => {
      
      const productosCollection = collection(db, "Products")
      const consulta = getDocs(productosCollection)
      console.log(consulta)

      consulta
      .then(snapshot=>{
         console.log(snapshot)
      })
      .catch(err=>{
         console.log(err)
      })
    

      setLoading(true)
      customFetch(products)
         .then(res => {
            if (category) {
               setLoading(false)
               setListProduct(res.filter(prod => prod.category === category))

            } else {
               setLoading(false)
               setListProduct(res)
            }

         })
   }, [category])

   return (
      <Flex color='pink'>

         <Center>
            <Heading >{greeting}</Heading>
            {!loading
               ?
               <ItemList listProduct={listProduct} />
               :
               <Text>Cargando...</Text>
            }
         </Center>

      </Flex>

   )
}
export { ItemListContainer }