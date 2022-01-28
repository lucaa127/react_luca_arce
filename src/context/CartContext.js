
import {createContext , useContext, useState } from "react";


const cartContext = createContext([])

export function useCartContext(){
    return useContext(cartContext)
}

export const CartContextProvider = ({children}) => {
    
    const [cartList,setCartList] = useState([])

        function agregarAlCarrito(items) {
            
            const indiceItem = cartList.findIndex(indice => indice.id === items.id )
                 
                if (indiceItem > -1){
                    
                    cartList[indiceItem].cantidad += items.cantidad
                    setCartList( [...cartList] )

                   } else {setCartList( [...cartList, items] )}
        }

        //eliminar productos del carrito por ID
        const deleteProd = (id) => {
            const borrarProducto = cartList.filter((items) => items.id !== id )
            setCartList(borrarProducto)
        }

        //precio total
        const total = () => {
                const totalCarrito = cartList.reduce((prev, curr) => prev + curr.precio * curr.cantidad, 0);
            return totalCarrito    

        }

        //cantidad CartWidget

        const totalWidget = () => {
            let ttl = 0

            cartList.forEach((item) => { ttl += item.cantidad})
            return ttl

        }

        const vaciarCarrito = () => {
            setCartList([])
        }


        return(
            <cartContext.Provider value={{
                cartList,
                agregarAlCarrito,
                deleteProd,
                total,
                totalWidget,
                vaciarCarrito
            }}>
                {children}
            </cartContext.Provider>

        )

}
