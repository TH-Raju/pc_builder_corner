import React from 'react';

const ProductDetail = ({ product }) => {
    return (
        <div className="flex max-w-7xl mx-auto items-center border-b border-gray-300 w-[80%]">
            <div className="w-[50%]">
                <img src={product?.image} alt="" />
            </div>
            <div className="w-[50%] space-y-3">
                <h1 className="text-3xl font-semibold">{product?.product_name}</h1>
                <p className="text-xl">Rating: {product?.rating}</p>
                <p className="text-xl">Price: {product?.price}</p>

                <button className="btn btn-neutral">Buy Now</button>
            </div>
        </div>
    );
};

export default ProductDetail;


export const getStaticPaths = async () => {
    const res = await fetch("http://localhost:5000/products")
    const products = await res.json()

    const paths = products.map(product => ({
        params: { productId: product._id }
    }))

    return { paths, fallback: false };
}


export const getStaticProps = async (context) => {
    const { params } = context;
    const res = await fetch(`http://localhost:5000/products/${params.productId}`)
    const data = await res.json()

    return {
        props: {
            product: data
        }
    }
}