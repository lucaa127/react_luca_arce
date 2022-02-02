
import { useCartContext } from '../context/CartContext'
import { useState } from "react"
import { Link } from 'react-router-dom'
import { FaTrashAlt } from "react-icons/fa"
import { Button, Table, Card } from 'react-bootstrap'
import { addDoc, collection, documentId, getDocs, getFirestore, query, where, writeBatch, Timestamp } from "firebase/firestore"


const Cart = () => {

const {cartList, deleteProd, total, vaciarCarrito} = useCartContext()

const [condicional, setCondicional] = useState(false);

const [dataForm , setDataForm ] = useState({
    email: '',
    name: '',
    phone: ''
});
const [idOrden, setIdOrden] = useState('');

const realizarCompra = async (e) => {
    e.preventDefault()   
  

    let orden = {}
    
    orden.buyer = dataForm
    orden.total = total();
    orden.fecha = Timestamp.fromDate(new Date())
    

    orden.items = cartList.map(cartItem => {
        const id = cartItem.id;
        const nombre = cartItem.nombre;
        const precio = cartItem.precio * cartItem.cantidad;
        const cantidad = cartItem.cantidad
        
        return {id, nombre, precio, cantidad}   
    }) 

    
    const db = getFirestore()




    const oredenCollection = collection(db, 'ordenes')
    await addDoc(oredenCollection, orden)
    .then(resp => setIdOrden(resp.id))
    .catch(err => console.log(err))

    const queryCollection = collection(db, 'items')
    
    const queryActulizarStock = query(
        queryCollection, 
        where( documentId() , 'in', cartList.map(it => it.id))          
    ) 

    const batch = writeBatch(db)       
    
    await getDocs(queryActulizarStock)
    .then(resp => resp.docs.forEach(res => batch.update(res.ref, {
            stock: res.data().stock - cartList.find(item => item.id === res.id).cantidad
        }) 
    ))
    .catch(err => console.log(err))
    .finally(()=> vaciarCarrito())

    batch.commit()
    setCondicional(true)    
    
}

function handleChange(e) {
    setDataForm({
        ...dataForm,
        [e.target.name]: e.target.value
    })


    console.log(dataForm)
    
}


    return (
                
        <>

        {
        condicional  ? 
        <>
        <h3> Compra generada con éxito </h3><br />
        <h5> El ID de compra es: {idOrden} </h5>
        </>
         : 
        
        cartList.length === 0 ? (
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

                    { cartList.map(prods => <> 
                    <tr> 
                        <td> <Card.Img variant="top" src={prods.img} style={{width :'40px'}} alt={prods.nombre} />{prods.nombre} </td>
                        <td> ${prods.precio}  </td> 
                        <td> {prods.cantidad} </td>
                        <td> <button onClick={() => deleteProd (prods.id)}> <FaTrashAlt/> </button> </td>
                    </tr>       
                    </>   ) }

                    <tr>                               
                        <td colSpan={4}><strong>Total:</strong> ${total()}</td>
                    </tr>

                </tbody>

            </Table>

            <button className='btn-danger mt-2' onClick={() => vaciarCarrito()}>Vaciar carrito</button>       

            <form onSubmit={realizarCompra} >
                                                     
                            <input 
                                className='mt-2'
                                type='text' 
                                name='name' 
                                placeholder='name' 
                                onChange={handleChange}
                                value={dataForm.name}
                            /><br />
                            <input 
                                className='mt-2'
                                type='text' 
                                name='phone'
                                placeholder='tel' 
                                onChange={handleChange}
                                value={dataForm.phone}
                            /><br/>
                            <input 
                                className='mt-2'
                                type='email' 
                                name='email'
                                placeholder='email' 
                                onChange={handleChange}
                                value={dataForm.email}
                                required
                            /><br/>
                            <button className='btn-danger mt-2' onClick={realizarCompra}>Generar orden</button>
                            
                        </form>
             
            

        </div>
                    )


                }    

                        
            </> 


        )
    }


export default Cart









/*
        <div>  
            {
                condicional  ? 
                    console.log(idOrden)
                : 
                    <>
                        {cartList.map(prod => <li key={prod.id}>{prod.nombre} - cant: {prod.cantidad}</li>)}
                        <button onClick={vaciarCarrito}>Vaciar CArrito</button>
                        <form 
                            onSubmit={realizarCompra} 
                            //onChange={handleChange} 
                        >
                            <input 
                                type='text' 
                                name='name' 
                                placeholder='name' 
                                onChange={handleChange}
                                value={dataForm.name}
                            /><br />
                            <input 
                                type='text' 
                                name='phone'
                                placeholder='tel' 
                                onChange={handleChange}
                                value={dataForm.phone}
                            /><br/>
                            <input 
                                type='email' 
                                name='email'
                                placeholder='email' 
                                onChange={handleChange}
                                value={dataForm.email}
                            /><br/>
                            <button>Generar Orden</button>
                        </form>
                        <button onClick={realizarCompra}>Generar Orden</button>
                    </>

            }          
        </div>












*/