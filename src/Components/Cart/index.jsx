import { VStack, Center,Text,Image,HStack,Button } from "@chakra-ui/react";
import { useCartContext } from "../../context/CartContext";

const Cart =()=>{

    const {cartList,totalPrice, removeProduct, cleanCart } = useCartContext()
    console.log(cartList)
    return(
        <Center>
            <VStack>
               {cartList.map(prod =>
                 <HStack key={prod.id} boxShadow='lg' p='6' rounded='md' spacing={10} bg="pink">
                    <Image src={prod.image} w="100px"></Image>
                    <Text as="b">{prod.product}</Text>
                    <Text as="b">Cantidad: {prod.quantity}</Text>
                    <Button colorScheme='pink' size='sm' onClick={() =>
                    removeProduct(prod.id)}></Button>

                 </HStack>
                )}
                {cartList.length ===0 ?
                  <Text>Tu Carrito esta vacio :</Text>
                  :

                  <>
                  <Text>Total: ${totalPrice()}</Text>
                <Button colorScheme='pink' size='sm' onClick={cleanCart}>Vaciar Carrito</Button>
                  
                  </>
                }
                
            </VStack>
        </Center>
    )
}
export {Cart}