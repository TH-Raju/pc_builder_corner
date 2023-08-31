import RootLayout from '@/components/Layouts/RootLayout';
import Link from 'next/link';
import ProductDetails from './ProductDetail';
import { useRouter } from 'next/router';

const ProductDetail = ({ product, products }) => {
    const router = useRouter();
    // const category = product.category
    // const filterCategory = products.filter(product => product.category === category)
    return (
        <div className="flex max-w-7xl mx-auto justify-around gap-7 items-center border-b border-gray-300 w-[80%] mt-28">
            <div className="w-[50%]">
                <img src={product?.image} alt="" />
            </div>
            <div className="w-[50%] space-y-3">
                <h1 className="text-2xl font-bold my-3">{product?.product_name}</h1>

                <p className="font-bold">Categoriy: {product?.category}</p>
                <p className="font-bold">Price: {product?.price}</p>
                <p className={`${product?.status == "In Stock" ? 'font-bold' : " "} text-sm`}>
                    Availability: {product?.status}
                </p>
                <p>Rating: {product?.rating}</p>

                <Link href={`/product/category/${product._id}`}><button className="btn btn-neutral">Detail</button></Link>

            </div>

        </div>
    );
};

export default ProductDetail;


ProductDetail.getLayout = function getLayout(page) {
    return <RootLayout>{page}</RootLayout>
}




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

