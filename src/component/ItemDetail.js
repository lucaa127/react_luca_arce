import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ItemCount from '../component/ItemCount';

const ItemDetail = ({producto}) => {
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

                <ItemCount minimo={1} maximo={producto.stock} /> 
                
                <Link to='/cart'><Button variant="secondary">Agregar producto</Button></Link>
            </Card.Body>
        </Card>



    )
}


export default ItemDetail
