import React from "react";

import {
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Grid,
} from "@mui/material";
import dynamic from "next/dynamic";
const RootLayout = dynamic(
  () => import("../../components/layouts/RootLayout"),
  {
    ssr: false,
  }
);
const ProductDetails = ({ product }) => {
  return (
    <Box
      style={{
        marginBottom: "4rem",
        padding: "4rem",
      }}
    >
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Card>
            <CardMedia
              component="img"
              style={{ height: "auto", width: "100%", backgroundColor: "#232B3E", border: "0" }}
              src={product.product.image}
              alt={product.product.name}
            />
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card style={{ backgroundColor: '#232B3E' }}>
            <CardContent>
              <Typography variant="h4" component="h1" gutterBottom style={{ color: '#FFFFFF' }}>
                {product.product.name}
              </Typography>
              <Typography variant="body1" gutterBottom style={{ color: '#FFFFFF' }}>
                <strong>Brand:</strong> {product.product.key_features.Brand}
              </Typography>
              <Typography variant="body1" gutterBottom style={{ color: '#FFFFFF' }}>
                <strong>Model:</strong> {product.product.key_features.Model}
              </Typography>
              <Typography variant="body1" gutterBottom style={{ color: '#FFFFFF' }}>
                <strong>Specification:</strong> {product.product.key_features.Specification}
              </Typography>
              <Typography variant="body1" gutterBottom style={{ color: '#FFFFFF' }}>
                <strong>Socket:</strong> {product.product.key_features.Socket}
              </Typography>
              <Typography variant="body1" gutterBottom style={{ color: '#FFFFFF' }}>
                <strong>Clock Speed:</strong> {product.product.key_features["Clock Speed"]}
              </Typography>
              <Typography variant="body1" gutterBottom style={{ color: '#FFFFFF' }}>
                <strong>TDP:</strong> {product.product.key_features.TDP}
              </Typography>
              <Typography variant="body1" gutterBottom style={{ color: '#FFFFFF' }}>
                <strong>Price:</strong> {product.product.price}
              </Typography>
              <Typography variant="body1" gutterBottom style={{ color: '#FFFFFF' }}>
                <strong>Status:</strong> {product.product.status}
              </Typography>
              <Typography variant="body1" gutterBottom style={{ color: '#FFFFFF' }}>
                <strong>Individual Rating:</strong> {product.product.individual_rating}
              </Typography>
              <Typography variant="body1" gutterBottom style={{ color: '#FFFFFF' }}>
                <strong>Average Rating:</strong> {product.product.average_rating}
              </Typography>
              <Typography variant="body1" gutterBottom style={{ color: '#FFFFFF' }}>
                <strong>Description:</strong> {product.product.description}
              </Typography>
              <Typography variant="h6" component="h2" gutterBottom style={{ color: '#FFFFFF' }}>
                Reviews:
              </Typography>
              {product.product.reviews.map((review) => (
                <Box key={review._id} mt={1} p={1} style={{ backgroundColor: '#232B3E', border: "4px solid #619A52" }}>
                  <Typography variant="body1" gutterBottom style={{ color: '#FFFFFF' }}>
                    <strong>Author:</strong> {review.author}
                  </Typography>
                  <Typography variant="body1" gutterBottom style={{ color: '#FFFFFF' }}>
                    <strong>Rating:</strong> {review.rating}
                  </Typography>
                  <Typography variant="body1" style={{ color: '#FFFFFF' }}>{review.comment}</Typography>
                </Box>
              ))}
            </CardContent>
          </Card>



        </Grid>
      </Grid>
    </Box>
  );
};

export default ProductDetails;

ProductDetails.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export async function getStaticPaths() {

  const res = await fetch(`https://pc-builder-pink-pi.vercel.app/api/products`);
  const products = await res.json();

  const paths = products.product.map((post) => ({
    params: { id: post._id.toString() },
  }));

  return { paths, fallback: false };
}

export const getStaticProps = async (context) => {
  const id = context.params.id;

  const res = await fetch(`https://pc-builder-pink-pi.vercel.app/api/products/${id}`);
  const product = await res.json();
  return { props: { product } };
};
