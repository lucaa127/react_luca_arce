import { useState, useEffect } from 'react'
import { getFetch } from '../helper/mock'




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
            <div> 
              <li>{prod.id}</li> 
              <li>{prod.detalle}</li>
              
            </div>

          
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
