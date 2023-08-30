import Link from "next/link";

// product from index.js in page route
const Products = ({ product }) => {
    return (
        <div className="rounded-2xl h-[480px] flex flex-col items-start justify-between p-5 overflow-hidden shadow-md border border-gray-100 hover:shadow-2xl hover:scale-[102%] transition-all">
            <Link href={`/product/${product._id}`} className="w-full">
                <img src={product?.image} alt="product" className="h-56 w-fit" />
                <h1 className="text-2xl font-bold my-3">{product?.product_name}</h1>

                <p className="font-bold">Categoriy: {product?.category}</p>
                <p className="font-bold">Price: {product?.price}</p>
                <p className={`${product?.status == "In Stock" ? 'font-bold' : " "} text-sm`}>
                    Availability: {product?.status}
                </p>
                <p>Rating: {product?.rating}</p>
                <button className="btn btn-neutral btn-sm mt-5">See Details</button>
            </Link>
        </div>
    );
};

export default Products;