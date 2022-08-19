import { HStack, Spacer, Link } from '@chakra-ui/react'
import Logo from '../../assets/Pictures/Logo.jpg'
import { CartWidget } from '../CartWidget'
import { NavLink } from "react-router-dom"

const Navbar = () =>{
    return(
        <HStack as = "nav">
          <NavLink to ="/">
            <img src={Logo} alt="" width="100px" />
          </NavLink>
          <Spacer />
          <HStack>
            <NavLink to="category/torta">
                 <Link>Torta</Link>
            </NavLink>
            <NavLink to="category/tarta">
                 <Link>Tartas</Link>
            </NavLink>
            <NavLink to="Nosotros/about">
                 <Link>Nosotros</Link>
            </NavLink>
            <NavLink to="Productos/products">
                 <Link>Productos</Link>
            </NavLink>
            <NavLink to="Contacto/contact">
                 <Link>Contacto</Link>
            </NavLink>
            
            <CartWidget />
          </HStack>
        </HStack>
    )
}

export { Navbar }