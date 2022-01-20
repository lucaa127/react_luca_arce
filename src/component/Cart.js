
import { useCartContext } from '../context/CartContext'

const Cart = () => {

    const {cartList} = useCartContext()

        return (
            <div>
                <h3>Productos en el carrito </h3>
                { cartList.map(prods => <li key={prods.id}> {prods.nombre} - cantidad: {prods.cantidad} - subtotal: $ {parseFloat (prods.precio * prods.cantidad)} </li> ) }
            </div>
        )
}

export default Cart
