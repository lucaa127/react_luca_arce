import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { getFetch } from '../helper/mock'
import ItemDetailContainer from './ItemDetailContainer';
import ItemList from './ItemList';
import Loading from './loading/Loading';



function ItemListContainer({greeting}) {
    const [productos, setProductos] = useState([])

    const [carga, setCarga] = useState(true)
    const {categoriaId} = useParams()


    useEffect(() => {
      if(categoriaId){
        getFetch
        .then(resp => setProductos(resp.filter(prod => prod.categoria === categoriaId)))
        .catch(err => console.log(err))
        .finally(()=> setCarga(false)) 
      } else {
        getFetch
        .then(resp => setProductos(resp))
        .catch(err => console.log(err))
        .finally(()=> setCarga(false)) 
      }

    }, [categoriaId])

        console.log(productos)

    return (
      <div>
          {carga ? (<Loading />):
          
          (
            <>   
            <h4>{greeting}</h4>
            
            <div className='row justify-content-center'>
            <ItemList items={productos}/>
            </div>
            {/* <ItemDetailContainer /> */}
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
