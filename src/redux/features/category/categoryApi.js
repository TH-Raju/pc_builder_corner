import { api } from "@/redux/api/apiSlice";

const categoryApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getCategory: builder.query({
      query: () => "/categories",
    }),
    getCategoryByName: builder.query({
      query: (id) => `/categories/${id}`,
    }),
    getCategoryProduct: builder.query({
      query: (id) => `/category-product-details/${id}`,
    }),
  }),
});

export const {
  useGetCategoryQuery,
  useGetCategoryByNameQuery,
  useGetCategoryProductQuery,
} = categoryApi;
