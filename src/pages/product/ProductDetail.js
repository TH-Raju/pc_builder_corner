import React from 'react';
import ProductDetail from './[productId]';

const ProductDetails = ({ products, children }) => {
    const category = children
    const filteredProducts = products?.filter(product => product.price === children);


    return (
        <div>
            <h1>Detail {products?.length} </h1>
            <h1>Details {filteredProducts?.length} </h1>
        </div>
    );
};

export default ProductDetails;

export const getServerSideProps = async () => {

    const res = await fetch("http://localhost:5000/products")
    const data = await res.json()
    // console.log(data.length);

    return {
        props: {
            products: data

        }
    };
}