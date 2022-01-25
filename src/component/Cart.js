
import { useCartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'
import { FaTrashAlt } from "react-icons/fa"
import { Button, Table, Card } from 'react-bootstrap'

const Cart = () => {

    //00:42 - ver de hacer esto como otro componente
    const {cartList, deleteProd, total, vaciarCarrito} = useCartContext()

        return (
            
                <>

                    {cartList.length === 0 ? (
                        <div>
                            <h3>Sin productos en el carrito </h3>
                           
                            <Link to='/'><Button className='btn-danger' >Volver al catálogo</Button></Link> 
                        </div>
                        ) : (       
                        <div> 
                            <h3>Productos en el carrito </h3>

                            <Table bordered hover size="sm" style={{ width: '80%', margin: 'auto'}}>
                                        <thead>
                                            <tr>
                                            
                                            <th style={{ width: '44%'}}>Producto</th>
                                            <th style={{ width: '18%'}}>Precio</th>
                                            <th style={{ width: '18%'}}>Cantidad</th>
                                            <th style={{ width: '10%'}}></th>
                                            
                                            </tr>
                                        </thead>
                                        <tbody>

                            { cartList.map(prods => <> <tr> <td> <Card.Img variant="top" src={prods.imagen} style={{width :'40px'}} alt='Imagen Cafe' />  {prods.nombre} </td>  <td> ${prods.precio} </td> <td> {prods.cantidad} </td>  <td> <button onClick={() => deleteProd (prods.id)}> <FaTrashAlt/> </button> </td></tr> </>) }
                        
                                            <tr>
                                            
                                            <td colSpan={3}><strong>Total:</strong> ${total()}</td>
                                            
                                            </tr>
                                        </tbody>
                          </Table>


                            <button className='btn-danger mt-2' onClick={() => vaciarCarrito()}>Vaciar carrito</button>
                    

                        </div>
                        )




                    }    

                </> 

        )
    }


export default Cart
