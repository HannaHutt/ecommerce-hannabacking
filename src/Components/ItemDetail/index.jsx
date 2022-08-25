import { VStack, Center, Text, Image, Heading, Select, HStack, Button, list, Img } from "@chakra-ui/react"
import { useState } from 'react'
import { FaCreditCard, FaRegCreditCard, FaHeart } from "react-icons/fa"
import { NavLink } from "react-router-dom"
import { ItemCount } from "../ItemCount"


const ItemDetail = ({ listProduct }) => {
    

    const { image, product, price, stock, config, description, initial } = listProduct
    const [isAdded, setIsAdded]=useState(false)

    const onAdd = () => {
        setIsAdded(true)
    }

    return (
        
        <Center boxShadow='lg' p='6' rounded='md' bg='pink' m="20px auto" maxWidth='-webkit-max-content'>
          
          <Image src={image} w="200px"/> 
         
          <VStack maxWidth="500px" align="left" mx="15px">
            <HStack>
                <Heading>{product}</Heading>
                <FaHeart size='20px' cursor="pointer" />
            </HStack>
            
            <Text className='bold' fontSize='2xl'>${price}</Text>
            <Text>Stock:{stock}</Text>
            <HStack>
                <FaCreditCard /> <FaRegCreditCard />
            </HStack>
            <Text fontSize='xs'>{description}</Text>
            {config.color &&
                <>
                    <Text className='bold'>Color</Text>
                    <HStack>
                        {config.color.map((col, index) => <div key={`${col}-${index}`} className='bold' />)}
                    </HStack>

                </>}
                {
                    isAdded ? 
                     <NavLink to="/cart">
                        <Button colorScheme='pink' size='md'>
                            Ir al Carrito
                        </Button>
                     </NavLink>
                     :
                     <ItemCount initial={initial} stock={stock} onAdd={onAdd}/>
                }
                
            
          </VStack>
        </Center>

         
        
    )
}
export { ItemDetail }
