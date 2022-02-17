import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Item = ({prods}) => {
    
    return (
        
    <Card style={{ width: '18rem'}}>
        <Card.Img variant="top" src={prods.img} style={{padding:'45px'}} alt='Imagen Cafe' />
            <Card.Body>
                <Card.Title>{prods.nombre}</Card.Title>
                <Card.Text>
                    ${prods.precio}
                </Card.Text>
                <Link to={`/detalle/${prods.id}`}> <Button variant="primary">Detalles del producto</Button></Link>
            </Card.Body>
    </Card>
   
    )
}

export default Item
