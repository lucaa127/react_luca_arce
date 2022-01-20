
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
                    
                    //let cantidadCarrito = cartList[indiceItem].cantidad
                    //let actualizarCantidadCarrito = cartList[indiceItem].cantidad + items.cantidad
                    cartList[indiceItem].cantidad += items.cantidad
                    setCartList( [...cartList] )

                   } else {setCartList( [...cartList, items] )}
        }

        function vaciarCarrito() {
            setCartList([])
        }

        console.log(cartList)

        return(
            <cartContext.Provider value={{
                cartList,
                agregarAlCarrito,
                vaciarCarrito
            }}>
                {children}
            </cartContext.Provider>

        )

}
