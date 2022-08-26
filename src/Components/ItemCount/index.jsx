import { Button, Text, HStack } from "@chakra-ui/react";
import { useState }  from "react";

const ItemCount = ({initial,stock,onAdd}) => {
    const [count, setCount] = useState(initial)

    const increase = () => count < stock && setCount(count + 1)
    const decrease = () => count > initial && setCount(count - 1)

    return(
        <HStack as="nav">
            <Button variant='ghost' colorScheme='pink' size='md' onClick={decrease}>-</Button>
            <Text>{count}</Text>
            <Button variant='ghost' colorScheme='pink' size='md' onClick={increase}>+</Button>
            <Button colorScheme='pink' size='md' onClick={() => onAdd(count)}>Agregar al Carrito</Button>
        </HStack>
    )
}

export {ItemCount} 