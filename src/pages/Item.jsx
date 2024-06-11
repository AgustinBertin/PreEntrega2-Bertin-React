import React from 'react'
import ItemDetailContainer from '../components/ItemDetailContainer/ItemDetailContainer'
import { useProductById } from '../hooks/useProductById'
import {useParams} from "react-router-dom"

const Item = () => {
  const {id}=useParams();
  const {product}=useProductById(id)
  return (
    <ItemDetailContainer product={product}/>
  )
}

export default Item