import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getFetch } from "../helper/mock";
import ItemDetail from "./ItemDetail";
import Loading from "./loading/Loading";
import { doc, getDoc, getFirestore } from "firebase/firestore"


const ItemDetailContainer = () => {
    const [producto, setProducto] = useState({})
    const [cargar, setCargaDetail] = useState(true)

    const {detalleId} = useParams()

        useEffect(()=>{
          getFetch
            .then(resp => setProducto(resp.find(prod => prod.id === '1')))
            const db = getFirestore()
            const queryProd = doc(db, 'items', detalleId)
            getDoc(queryProd)
            .then(resp => setProducto( {id: resp.id, ...resp.data()} ))
            .finally(()=> setCargaDetail(false)) 
      }, [])
  

return (
      
      <div className='row justify-content-center'>
            {cargar ? (<Loading />):
             (<>   
                <ItemDetail producto = {producto} />
              </>)
            }
  
      </div>

       )
    }


export default ItemDetailContainer
