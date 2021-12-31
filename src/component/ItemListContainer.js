import { useState, useEffect } from 'react'
import { getFetch } from '../helper/mock'
import { Card, Button } from 'react-bootstrap';



function ItemListContainer({greeting}) {
    const [productos, setProductos] = useState([])

    useEffect(() => {
        getFetch
        .then(resp => setProductos(resp))
        .catch(err => console.log(err))
        .finally(()=> console.log('Final') ) 
    }, [])



        console.log(productos)

    return (
      <div>
          <h4>{greeting}</h4>
          {productos.map(prod => 
            
                            
            <Card style={{ width: '18rem', margin:'auto'}}>
                <Card.Img variant="top" src={prod.imagen} style={{padding:'45px'}} alt='Imagen Cafe' />
                <Card.Body>
                    <Card.Title>{prod.detalle}</Card.Title>
                    <Card.Text>
                        ${prod.precio}
                    </Card.Text>
                    <Button variant="primary">Detalles del producto</Button>
                </Card.Body>
            </Card>
          
          )}
      </div>
    )

}


export default ItemListContainer






// const ItemListContainer = (props) => {
//     return (
//         <div>
//             <h1>{props.greeting}</h1>
//         </div>
//     )
// }

// export default ItemListContainer
