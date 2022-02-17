
import React from 'react'
import {RiShoppingCartFill} from 'react-icons/ri';
import { useCartContext } from '../../context/CartContext';

const CartWidget = () => {

    const {totalWidget} = useCartContext()
    
    let valorCarrito = totalWidget()

    return (

        <>

        { valorCarrito > 0 ? 
        (<div style={{fontSize: '1.4rem'}}>
            
            <RiShoppingCartFill/> {valorCarrito}
            

        </div> ) : (<></>) 
            }
        </>
         
    )
}
export default CartWidget
