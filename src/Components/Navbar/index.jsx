import { HStack, Spacer, Link } from '@chakra-ui/react'
import Logo from '../../assets/Pictures/Logo.jpg'

const Navbar = () =>{
    return(
        <HStack>
          <img src={Logo} alt="" width="100px" />
          <Spacer />
          <HStack>
            <Link>Home</Link>
            <Link>Nosotros</Link>
            <Link>Productos</Link>
            <Link>Contacto</Link>
          </HStack>
        </HStack>
    )
}

export { Navbar }