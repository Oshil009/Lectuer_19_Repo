import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
const Product = ({ product }) => {
    const { id } = useParams();
    const productAllData = product[id-1];
    const navigate=useNavigate();
    return (
    <div>
        <h2>Product</h2>
        <p>the product category: {productAllData?.category} </p>
        <p>the product id: {productAllData?.id} </p>
        <p>the product image: {productAllData?.image} </p>
        <p>the product name: {productAllData?.name} </p>
        <p>the product price: {productAllData?.price} </p>
        <p>the product in stock: {productAllData?.stock} </p>
        <button onClick={()=>{
            navigate("/")
        }}> go to home </button>
    </div>
    )
}

export default Product