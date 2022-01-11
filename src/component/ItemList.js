import React from 'react'
import Item from './Item'
// import { Col, Row } from 'react-bootstrap';

const ItemList = ({items}) => {
    return (
        
        items.map(prod =>  <Item prods = {prod}/> )
        
    )
}

export default ItemList
