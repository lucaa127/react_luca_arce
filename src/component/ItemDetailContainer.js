import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { getFetch } from "../helper/mock";
import ItemDetail from "./ItemDetail";
import Loading from "./loading/Loading";



const ItemDetailContainer = () => {
    const [producto, setProducto] = useState({})
    const [cargar, setCargaDetail] = useState(true)

    const {detalleId} = useParams()

        useEffect(() => {
            getFetch
            .then(resp => setProducto(resp.find(prod => prod.id === detalleId)))
            .finally(()=> setCargaDetail(false)) 
        }, [])

        return (

            <div className='row justify-content-center'>
            {cargar ? (<Loading />):
            
            (
              <>   
                    <ItemDetail producto = {producto} />
              </>
            )
  
             
          }
  
        </div>


        )
}


{/* <div>
<ItemDetail producto = {producto} />
</div> */}




export default ItemDetailContainer
