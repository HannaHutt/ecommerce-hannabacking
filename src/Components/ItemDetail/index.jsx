import { VStack,Center, Text, Image, Heading, Select, HStack, Button } from "@chakra-ui/react"
import{useState} from 'react'
import { FaCreditCard, FaRegCreditCard, FaHeart } from "react-icons/fa" 
import { NavLink } from "react-router-dom"
import { ItemCount } from "../ItemCount"

const ItemDetail = ({listProduct}) => {

    const{Image, product, price, stock, config, description, initial } = listProduct
     
    return(
        
        <div>{listProduct.product}</div>
    )
}
export {ItemDetail}