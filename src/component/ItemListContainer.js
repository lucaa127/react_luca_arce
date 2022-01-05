import { useState, useEffect } from 'react'
import { getFetch } from '../helper/mock'
import ItemList from './ItemList';
import Loading from './loading/Loading';



function ItemListContainer({greeting}) {
    const [productos, setProductos] = useState([])

    const [carga, setCarga] = useState(true)

    useEffect(() => {
        getFetch
        .then(resp => setProductos(resp))
        .catch(err => console.log(err))
        .finally(()=> setCarga(false)) 
    }, [])

        console.log(productos)

    return (
      <div>
          {carga ? (<Loading />):
          
          (
           <>   
          <h4>{greeting}</h4>
          <ItemList items={productos}/>
          </>
          )
        }

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
