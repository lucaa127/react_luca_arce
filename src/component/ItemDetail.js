import { Card, Button } from 'react-bootstrap';
import ItemCount from '../component/ItemCount';

const ItemDetail = ({producto}) => {
    return (
        // <div>
        //     {producto.detalle}
        // </div>

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
                
                <Button variant="secondary">Agregar producto</Button>
            </Card.Body>
        </Card>



    )
}


    // <Button variant="primary">Detalles del producto</Button>

export default ItemDetail
