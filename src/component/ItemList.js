import React from 'react'
import Item from './Item'

const ItemList = ({items}) => {
    return (

        items.map(prod => <Item prods = {prod}/>)
    )
}

export default ItemList
