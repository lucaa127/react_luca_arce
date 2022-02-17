import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ItemCount from './ItemCount';
import { useState } from 'react';
import { useCartContext } from '../../context/CartContext';

const ItemDetail = ({producto}) => {

    const [show, setShow] = useState(true)
    const {agregarAlCarrito, controlCartStock} = useCartContext()
    
    const onAdd = (contador) => {
        setShow(false)
        agregarAlCarrito( {...producto, cantidad: contador} )

        }

        const stockDisponible = controlCartStock(producto.stock, producto.id)
        


    return (

        <Card style={{ width: '18rem'}}>
        <Card.Img variant="top" src={producto.img} style={{padding:'15%', width:'70%', margin:'auto'}} alt={producto.nombre} />
            <Card.Body>
                <Card.Title>{producto.nombre}</Card.Title>
                <Card.Text>
                    ${producto.precio}
                </Card.Text>
                <Card.Text>
                    {producto.detalle}
                </Card.Text>

                {show ? <ItemCount minimo={1} maximo={stockDisponible} onAdd={onAdd} /> : 
                <>
                    <Link to='/'><Button variant="secondary" className='md-5 p-1'>Seguir comprando</Button></Link> 

                    <Link to='/cart'><Button variant="danger" className='mt-1 p-1' >Terminar mi compra</Button></Link>

                </>
                }
                 
            </Card.Body>

        </Card>

    )
}

export default ItemDetail
