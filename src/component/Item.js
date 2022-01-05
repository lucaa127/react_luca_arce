import React from 'react'
import { Card, Button } from 'react-bootstrap';
// import { getFetch } from '../helper/mock'


const Item = ({prods}) => {
    return (
    <Card style={{ width: '18rem', margin:'auto'}}>
        <Card.Img variant="top" src={prods.imagen} style={{padding:'45px'}} alt='Imagen Cafe' />
            <Card.Body>
                <Card.Title>{prods.detalle}</Card.Title>
                <Card.Text>
                    ${prods.precio}
                </Card.Text>
                <Button variant="primary">Detalles del producto</Button>
            </Card.Body>
    </Card>
    )
}

export default Item
