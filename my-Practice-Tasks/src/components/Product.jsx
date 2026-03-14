import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
const Product = ({ product }) => {
    const navigate = useNavigate();
    const { id } = useParams();
    const productAllData = product.find(item => item?.id === parseInt(id))
    if (!productAllData) {
        return (
            <div style={{ textAlign: 'center', marginTop: '50px' }}>
                <h2>❌ Product #{id} Not Found!</h2>
                <p>We only have products from 1 to 10.</p>
                <button onClick={() => navigate("/")}>Back to Store</button>
            </div>
        );
    }
    return (
        <div>
            <h2>Product</h2>
            <p>the product category: {productAllData?.category} </p>
            <p>the product id: {productAllData?.id} </p>
            <p>the product image: {productAllData?.image} </p>
            <p>the product name: {productAllData?.name} </p>
            <p>the product price: {productAllData?.price} </p>
            <p>the product in stock: {productAllData?.stock} </p>
            <button onClick={() => {
                navigate("/")
            }}> Back to Store</button>
        </div>
    )
}

export default Product