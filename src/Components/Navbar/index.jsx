import { HStack, Spacer, Link } from '@chakra-ui/react'
import Logo from '../../assets/Pictures/Logo.jpg'
import { CartWidget } from '../CartWidget'

const Navbar = () =>{
    return(
        <HStack as = "nav">
          <img src={Logo} alt="" width="100px" />
          <Spacer />
          <HStack>
            <Link>Home</Link>
            <Link>Nosotros</Link>
            <Link>Productos</Link>
            <Link>Contacto</Link>
            <CartWidget />
          </HStack>
        </HStack>
    )
}

export { Navbar }