import React from 'react'
import { getProductsByCategory } from '../services/products';
import Category from '../pages/Category';

export const useProductsByCategory = (category) => {
    const [products,setProducts]=React.useState([]);

    React.useEffect(()=>{
    getProductsByCategory(category).then((res)=>{
        setProducts(res.data.products);
}).catch((err)=>{
    console.error(err);
});
},[category]);

return {products}
}

