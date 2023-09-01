import { useGetCategoryByNameQuery } from "@/redux/features/category/categoryApi";
import { useRouter } from "next/router";
import React from "react";
import {
  Box,
  Typography,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Button,
} from "@mui/material";

import Link from "next/link";
import dynamic from "next/dynamic";
import { customColor } from "../../../utils/colors";
const RootLayout = dynamic(
  () => import("../../components/layouts/RootLayout"),
  {
    ssr: false,
  }
);
const CategoryProducts = () => {
  const router = useRouter();
  const id = router.query.id;

  const { data, error, isLoading } = useGetCategoryByNameQuery(id);
  console.log(data);
  const products = data?.category?.products;

  const cardHeight = 500;
  return (
    <Box
      style={{
        marginBottom: "4rem",
        padding: "4rem",
        backgrundColor:customColor.cardColor.cardColor
      }}
    >
      <Typography variant="h4" component="h1" gutterBottom></Typography>
      <Grid container spacing={3} mt={4}>
        {products?.map((product) => (
          <Grid item key={product._id} xs={12} sm={6} md={4} lg={3}>
            <Card
              className="Card-root"
              style={{
                width: "100%",
                height: cardHeight,
                backgroundColor:customColor.cardColor
              }}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  style={{
                    height: "200px",
                    width: "100%",
                    objectFit: "contain",
                  }}
                  src={product.image}
                  alt={product.name}
                />
                <CardContent>
                  <Typography
                    variant="h5"
                    component="h2"
                    style={{
                      marginBottom: "1rem",
                      fontWeight: 600,
                      color:"#96A2B4"
                    }}
                  >
                {product?.name}
                  </Typography>
                  <Typography
                    variant="body1"
                    style={{
                      marginBottom: "1rem",
                      fontWeight: 600,
                      color:"#96A2B4"
                    }}
                  >
                 {product.category}
                  </Typography>
                  <Typography
                    variant="body1"
                    style={{
                      marginBottom: "0.5rem",
                      color:"#96A2B4"
                    }}
                  >
                    Price: ${product.price}
                  </Typography>
                  <Typography
                    variant="body1"
                    style={{
                      marginBottom: "0.5rem",
                      color:"#96A2B4"
                    }}
                  >
                    Status: {product.status}
                  </Typography>
                  <Typography
                    variant="body1"
                    style={{
                      marginBottom: "0.5rem",
                      color:"#96A2B4"
                    }}
                  >
                    Average Rating: {product.average_rating}
                  </Typography>

                  <Link href={`/category-details/${product.id}`} passHref>
                    <Button
                      variant="contained"
                      color="primary"
                      style={{ textDecoration: "none" }}
                    >
                      Details
                    </Button>
                  </Link>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CategoryProducts;
CategoryProducts.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
