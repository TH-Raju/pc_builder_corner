import React from "react";
// import dynamic from "next/dynamic";

// const RootLayout = dynamic(
//   () => import("../../components/layouts/RootLayout"),
//   {
//     ssr: false,
//   }
// );
const ProductCategory = ({ categories }) => {
  console.log(categories);
  return (
    <div>
      <h1>Product category</h1>
      {/* {categories?.category?.map((c) => (
        <>
          <div>
            <h1>{c.categories_name}</h1>
          </div>
        </>
      ))} */}
    </div>
  );
};

export default ProductCategory;
// ProductCategory.getLayout = function getLayout(page) {
//   return <RootLayout>{page}</RootLayout>;
// };
// export const getStaticProps = async () => {
//   const res = await fetch("https://pc-builder-pink-pi.vercel.app/api/categories");
//   const categories = await res.json();
//   console.log(categories);
//   return { props: { categories } };
// };
