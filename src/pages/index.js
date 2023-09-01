import React from "react";

import dynamic from "next/dynamic";
import AllProducts from "@/components/Products/Products";
import Category from "../pages/category/index";
import ProductCategory from "@/components/category/ProductCategory";
import { useGetCategoryQuery } from "@/redux/features/category/categoryApi";
import HeroSection from "@/components/ui/Hero";
import Footer from "@/components/ui/Footer";

const RootLayout = dynamic(() => import("../components/layouts/RootLayout"), {
  ssr: false,
});
const HomePage = ({ products, categories }) => {
  console.log(products)

  // const { data: category } = useGetCategoryQuery(null);

  return (
    <div>

      <HeroSection />
      <AllProducts products={products} />
      <Category products={categories} />
      <Footer />
    </div>
  );
};

export default HomePage;
HomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
export const getStaticProps = async () => {
  if (typeof window === undefined) {
    return { props: { products: [], categories: [] } }
  }
  const res = await fetch("https://pc-builder-pink-pi.vercel.app/api/products");
  const products = await res.json();
  const cateres = await fetch("https://pc-builder-pink-pi.vercel.app/api/categories");
  const categories = await cateres.json();

  return { props: { products, categories } };
};
