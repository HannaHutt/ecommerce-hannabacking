import { VStack,Button,Text,Image,Link } from '@chakra-ui/react'



const Item = ({product}) => {
    console.log(product);

    return(
        <VStack boxShadow='lg' p='6' rounded='md' bg='white' m="15px" minWidth="275px">
            <image src={product.image} alt={product.product} w="100px" />
            <Text>{product.product}</Text>
            <Text>${product.price}</Text>
            <Button colorScheme='pink' size='xs'>
                <Link>Ver Detalle</Link>
            </Button>
        </VStack>
    )
}
export {Item}
