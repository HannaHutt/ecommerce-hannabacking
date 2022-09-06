import { Heading, Text, Center, HStack, Flex } from '@chakra-ui/react'
import { products } from '../../utils/products'
import { customFetch } from '../../utils/customFetch'
import { useState, useEffect } from 'react'
import { ItemList } from '../ItemList'
import { useParams } from 'react-router-dom'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '../../Firebase'




const ItemListContainer = ({ greeting }) => {

   const [listProduct, setProductos] = useState([])
   const [loading, setLoading] = useState(true)
   const { id } = useParams()

   const { category } = useParams()


   useEffect(() => {

      const productosCollection = collection(db, "Products")
      /*const filtro = query(productosCollection,where("category","==",id))
      console.log(filtro)*/
      const consulta = getDocs(productosCollection)


      consulta
         .then(snapshot => {
            const producto = snapshot.docs.map(doc => {
               return {
                  ...doc.data(),
                  id: doc.id
               }
            })
            setProductos(producto)
            setLoading(false)
         })
         .catch(err => {
            console.log(err)
         })

         console.log(listProduct)

      // setLoading(true)
      // customFetch(products)
      //    .then(res => {
      //       if (category) {
      //          setLoading(false)
      //          setProductos(res.filter(prod => prod.category === category))

      //       } else {
      //          setLoading(false)
      //          setProductos(res)
      //       }

      //    })
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