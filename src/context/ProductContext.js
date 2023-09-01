
import React, { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";

const ProductContext = createContext();

export const useProductContext = () => useContext(ProductContext);

export function ProductProvider({ children }) {
  const [selectedProducts, setSelectedProducts] = useState({});

  useEffect(() => {
    const storedProducts = localStorage.getItem("selectedProducts");
    if (storedProducts) {
      setSelectedProducts(JSON.parse(storedProducts));
    }
  }, []);

  const addProduct = (product) => {
    const category = product?.category;
    console.log(category, "ccc");
    setSelectedProducts((prevSelectedProducts) => {
      const updatedSelectedProducts = { ...prevSelectedProducts };

      if (!updatedSelectedProducts[category]) {
        updatedSelectedProducts[category] = [product];
      } else {
        const isProductAlreadyAdded = updatedSelectedProducts[category].some(
          (p) => p?.name === product?.name
        );

        if (!isProductAlreadyAdded) {
          updatedSelectedProducts[category] = [
            ...updatedSelectedProducts[category],
            product,
          ];
        } else {
          toast.error("Already Added");
        }
      }

      localStorage.setItem(
        "selectedProducts",
        JSON.stringify(updatedSelectedProducts)
      );

      return updatedSelectedProducts;
    });

    toast.success("Product Added");
  };

  const removeProduct = (category, productName) => {
    setSelectedProducts((prevSelectedProducts) => {
      const updatedSelectedProducts = { ...prevSelectedProducts };

      if (updatedSelectedProducts[category]) {
        updatedSelectedProducts[category] = updatedSelectedProducts[
          category
        ].filter((product) => product?.name !== productName);
      }

      localStorage.setItem(
        "selectedProducts",
        JSON.stringify(updatedSelectedProducts)
      );

      return updatedSelectedProducts;
    });

    toast.success("Product Removed");
  };

  return (
    <ProductContext.Provider
      value={{ selectedProducts, addProduct, removeProduct }}
    >
      {children}
    </ProductContext.Provider>
  );
}
