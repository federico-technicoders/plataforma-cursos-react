import {useContext, createContext, useState} from 'react'

const CartContext = createContext([])
export const useCartContext = () => useContext(CartContext)

export const CartContextProvider = ({children}) => {
    const [cartList, setCartList] = useState([])

    const addCursoToCart = curso => {
        setCartList([
            ...cartList,    
            curso
        ])
    }

    const removeCursoToCart = id => {
        if (confirm('Seguro que quiere eliminar este curso de su carrito?')) {
            setCartList(cartList.filter(curso => curso.id !== id))            
        }
    }

    return (
        <CartContext.Provider value={{
            cartList,
            addCursoToCart,
            removeCursoToCart
        }}>
            {children}
        </CartContext.Provider>
    )
}
