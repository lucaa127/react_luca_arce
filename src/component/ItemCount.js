import React, {useState} from 'react'
import { Button, InputGroup, FormControl } from 'react-bootstrap';

const ItemCount = ({minimo, maximo}) => {

    const [counter, setCounter] = useState(minimo)

    const handleIncrement = () => {
        if (counter < maximo){
            setCounter(prev => prev + 1)
        } else {
            alert('Llego al límite de stock')
        }

        
    }

    const handleDecrement = () => {
       
        if (counter > minimo){
        setCounter (prev => prev - 1)
        } else {
            alert('Ya se encuentra en el mínimo posible')
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
                            
                        </InputGroup>

        )

    }

export default ItemCount
