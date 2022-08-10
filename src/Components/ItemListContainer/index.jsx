import { Heading, Text } from '@chakra-ui/react'
import {ItemCount} from '../ItemCount'
import { products } from '../../utils/products'
import { customFetch } from '../../utils/customFetch'
import { useState,useEffect } from 'react'
import { ItemList } from '../ItemList'

const ItemListContainer = ({greeting}) =>{
    
     const [listProduct, setListProduct] = useState([])
     const [loading, setLoading] = useState (true)

     useEffect(() => {
        setLoading(true)
        customFetch(products)
           .then(res => {
             setLoading(false)

             setListProduct(res)

           }) 
    }, [])

    return(
       <>
        <Heading>{greeting}</Heading>
        {!loading
        ?
        <ItemList listProduct ={listProduct}/>
        :
        <Text>Cargando...</Text>
    }
        
       {/* <ItemCount initial={1} stock={5} onAdd={() => {}}/>*/}
       </>
        
    )
}
export{ItemListContainer}