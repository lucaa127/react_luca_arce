import { useEffect } from "react";
import { useState } from "react";
import { getFetch } from "../helper/mock";
import ItemDetail from "./ItemDetail";
import Loading from "./loading/Loading";



const ItemDetailContainer = () => {
    const [producto, setProducto] = useState({})
    const [cargar, setCargaDetail] = useState(true)

        useEffect(() => {
            getFetch
            .then(resp => setProducto(resp.find(prod => prod.id === '1')))
        }, [])

        return (
                
            <div>
                          <ItemDetail producto = {producto} />
            </div>
        )
}

export default ItemDetailContainer
