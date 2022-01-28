import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';
import Loading from './loading/Loading';
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore'


function ItemListContainer({greeting}) {
  const [productos, setProductos] = useState([])
  const [carga, setCarga] = useState(true)
  const {categoriaId} = useParams()


    useEffect(() => {
      const db = getFirestore()

      if (categoriaId) {
       
        const queryProducts = query(collection(db, 'items'), where ('categoria', '==', categoriaId))
          getDocs(queryProducts)  
          .then(res => setProductos( res.docs.map(prod => ( { id: prod.id, ...prod.data() } ) ) ))
          .catch(err => console.log(err))
          .finally(()=> setCarga(false))       

      } else {            
 
        const queryProducts = collection(db, 'items')                  
          getDocs(queryProducts)
          .then(res => setProductos( res.docs.map(prod => ( { id: prod.id, ...prod.data() } ) ) )) 
          .catch(err => err)
          .finally(()=> setCarga(false)) }

      }, [categoriaId])

  return (
      <div>
          {carga ? (<Loading />):
          
          (
            <>   
              <h4>{greeting}</h4>
                <div className='row justify-content-center'>
                <ItemList items={productos}/>
                </div>
           </>
          )           
        }

      </div>
    )
}


export default ItemListContainer
