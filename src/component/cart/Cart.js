
import { useCartContext } from '../../context/CartContext'
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
                        <td> <i className='danger' onClick={() => deleteProd (prods.id)}> <FaTrashAlt/> </i> </td>
                    </tr>       
                    </>   ) }

                    <tr>                               
                        <td colSpan={4}><strong>Total:</strong> ${total()}</td>
                    </tr>

                </tbody>

            </Table>

            <button className='btn-danger mt-2' onClick={() => vaciarCarrito()}>Vaciar carrito</button>       

            <form onSubmit={realizarCompra} >

                <h5 className='mt-20'>Complete el formulario para finalizar su compra</h5>

                            <input 
                                className='mt-2'
                                type='text' 
                                name='name' 
                                placeholder='Nombre completo' 
                                onChange={handleChange}
                                value={dataForm.name}
                                required
                            /><br />
                            <input 
                                className='mt-2'
                                type='tel' 
                                pattern='[0-9]{10}'
                                title='Ingrese un número de teléfono valido'
                                name='phone'
                                placeholder='teléfono de contacto' 
                                onChange={handleChange}
                                value={dataForm.phone}
                                required
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
                             <input 
                                className='mt-2'
                                type='email' 
                                name='validateEmail'
                                placeholder='valide su email' 
                                onChange={handleChange}
                                value={dataForm.validateEmail}
                                required
                                /><br/>
                                
                                {dataForm.validateEmail === dataForm.email && dataForm.email != undefined ? 
                                <h6>Ingrese sus datos</h6>
                                : <h6>Valide su correo</h6> }

                                {dataForm.validateEmail === dataForm.email ? 
                                <button className='btn-danger mt-2' type='submit'>Generar orden </button>
                                : <button className='btn-danger mt-2' type='submit' disabled>Generar orden </button>}

                                
                           
                            
                        </form>
             
            

        </div>
                    )


                }    

                        
            </> 


        )
    }


export default Cart


// <button onClick={() => deleteProd (prods.id)}> <FaTrashAlt/> </button> 



