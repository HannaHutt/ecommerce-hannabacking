import { VStack,Button,Text,Image,Link } from '@chakra-ui/react'
import { NavLink } from "react-router-dom"




const Item = ({product}) => {
   /* console.log(product)*/

    return(
        <VStack boxShadow='lg' p='6' rounded='md' bg='white' m="15px" minWidth="275px">
            <Image src={product.image} alt={product.product}  />
            <Text>{product.product}</Text>
            <Text>${product.price}</Text>
            <Button colorScheme='pink' size='xs'>
                <NavLink to={`product/${product.id}`}>
                  <Link>Ver Detalle</Link>
                </NavLink>
                
            </Button>
        </VStack>
    )
}
export {Item}
