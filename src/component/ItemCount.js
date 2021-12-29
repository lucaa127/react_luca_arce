import React, {useState} from 'react'

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
        
                <div>
                    <h3>Contador</h3>
                    <h4>{counter}</h4>
                    <button onClick={handleIncrement}>+</button>
                    <button onClick={handleDecrement}>-</button>

                </div>

        )
}

export default ItemCount
