import {useState} from 'react'
import { Button, InputGroup, FormControl } from 'react-bootstrap';


const ItemCount = ({minimo, maximo, onAdd}) => {

    const [counter, setCounter] = useState(minimo)
    const [stockAlert, setStockAlert] = useState(0)


    const handleIncrement = () => {
        if (counter < maximo){
            setCounter(prev => prev + 1)
            setStockAlert(0)
        } else {
            setStockAlert(1)
            //alert('Llego al límite de stock')
        }

        
    }

    const handleDecrement = () => {
       
        if (counter > minimo){
        setCounter (prev => prev - 1)
        setStockAlert(0)
        } else {
           setStockAlert(2)
           //alert('Ya se encuentra en el mínimo posible')
        }
    }

        return (
        
                

                        <InputGroup size="sm" className="row g-3" style={{ width: '80%', margin:'auto', marginBottom:'10px'}}>
                            
                            <Button variant="outline-secondary" className='col-sm-2 col-2' onClick={handleDecrement}>
                            -
                            </Button>
                            <FormControl className='col-sm-6 col-6 text-center'
                            value={counter}
                            />
                            
                            <Button variant="outline-secondary" className='col-sm-2 col-2' onClick={handleIncrement}>
                            +
                            </Button>

                          

                           {maximo > 0 ? <Button variant="secondary" onClick={() => onAdd(counter)}>Agregar producto</Button> 
                           :             <Button variant="secondary" disabled>Sin stock</Button>   }
                           {stockAlert === 1 && maximo > 0  ? <span>Llegó al límite del stock</span> : 
                           maximo === 0 ? (<span>Sin stock disponible para el producto seleccionado. Disculpe las molestias.</span>) :
                           (<span>Seleccione cantidad</span>)}
                            
                        
                        </InputGroup>
                        


        )               
    }

export default ItemCount
