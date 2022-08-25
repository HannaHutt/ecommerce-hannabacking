import { createContext, useState, useContext } from "react";


const CartContext = createContext([])
export const useCartContext = () => useContext(CartContext)

export function CartContextProvider({ children }) {

    const [cartList, setCartList] = useState([])

    const isInCart = (id) => cartList.find(prod => prod.id === id)

    const addToCart = (Item, quantity) => {
        if (isInCart(Item.id)) {
            const newCart = cartList.map(prod => {
                if (prod.id === Item.id) {
                    const newQuantity = prod.quantity + quantity
                    return { ...prod, quantity: newQuantity }
                } else {
                    return prod
                }
            })
            setCartList(newCart)
        } else {
            const newProduct = { ...Item, quantity: quantity }
            setCartList([...cartList, newProduct])
        }
    }

    const removeProduct = (id) => setCartList(cartList.filter(prod => prod.id != id))

    const cleanCart = () => setCartList([])

    const totalPrice = () => {
        return cartList.reduce((acc, product) => acc += (product.price * product.quantity), 0)
    }

    const totalQuantity = () => {
        return cartList.reduce((acc, product) => acc += product.quantity, 0)
    }




    return (
        <CartContext.Provider value={{
            addToCart,
            removeProduct,
            cleanCart,
            totalPrice,
            totalQuantity


        }}>

            {children}
        </CartContext.Provider>


    )
}