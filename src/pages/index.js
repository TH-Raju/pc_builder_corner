import RootLayout from "@/components/Layouts/RootLayout";
import Products from "./Product";
import Banner from "@/components/UI/Banner";



const HomePage = ({ products }) => {

  return (
    <div>
      <Banner></Banner>
      <h1 id="featured" className="text-3xl text-center font-extrabold mt-24">Featured Products</h1>
      <hr class="my-4 border-t-2 border-gray-900 ml-[30%] mr-[30%] " />

      <div className="col-span-9 grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5 p-10 w-[80%] mx-auto">
        {
          products.map(product => <Products key={product._id} product={product}></Products>)
        }
      </div>
    </div>
  );
};

export default HomePage;

HomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};


export const getStaticProps = async () => {

  const res = await fetch("http://localhost:5000/homeproducts")
  const data = await res.json()
  // console.log(data.length);

  return {
    props: {
      products: data

    }
  };
}

