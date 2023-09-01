import { api } from "@/redux/api/apiSlice";

const categoryApi = api.injectEndpoints({
  endpoints: (builder) => ({
    postProducts: builder.mutation({
      query: (product) => ({
        url: "/order",
        method: "POST",
        body: product,
      }),
    }),
  }),
});

export const { usePostProductsMutation } = categoryApi;
