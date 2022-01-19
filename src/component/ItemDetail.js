import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ItemCount from '../component/ItemCount';
import { useState } from 'react';

const ItemDetail = ({producto}) => {

    const [show, setShow] = useState(true)

    const onAdd = (contador) => {
        setShow(false)
        // alert(`${contador}`)
       
    }

    return (

        <Card style={{ width: '20rem'}}>
        <Card.Img variant="top" src={producto.imagen} style={{padding:'35%'}} alt='Imagen Cafe' />
            <Card.Body>
                <Card.Title>{producto.nombre}</Card.Title>
                <Card.Text>
                    ${producto.precio}
                </Card.Text>
                <Card.Text>
                    {producto.detalle}
                </Card.Text>

                {show ? <ItemCount minimo={1} maximo={producto.stock} onAdd={onAdd} /> : 
                <Link to='/cart'><Button variant="secondary">Ir al carrito</Button></Link> }
                 
                
                
            </Card.Body>
        </Card>



    )
}


export default ItemDetail
