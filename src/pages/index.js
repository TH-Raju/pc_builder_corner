import RootLayout from "@/components/Layouts/RootLayout";
import Products from "./Product";



const HomePage = ({ products }) => {

  return (
    <div>
      <h1>Home Page </h1>
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

