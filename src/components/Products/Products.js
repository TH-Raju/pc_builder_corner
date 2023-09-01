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

const AllProducts = ({ products }) => {
  const cardHeight = 500;
  return (
    <Box
      style={{
        marginBottom: "4rem",
        padding: "4rem",
        
      }}
    >
      <Typography style={{textAlign:"center",color:"#2196F3" ,fontWeight:"600"}} variant="h4" component="h1" gutterBottom>
        Our Featured Products
      </Typography>
      <Grid container spacing={3} mt={4}>
        {products?.product?.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
          <Card className="Card-root" style={{ width: "100%", height: cardHeight, backgroundColor: "#1A202E" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          style={{
            height: "200px",
            width: "100%",
            objectFit: "contain",
            padding:'10px'
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
              color: "#96A2B4", // Set the text color to #96A2B4
            }}
          >
            {product.name}
          </Typography>
          <Typography
            variant="body1"
            style={{
              marginBottom: "1rem",
              fontWeight: 600,
              color: "#96A2B4", // Set the text color to #96A2B4
            }}
          >
            
            {product.category}
          </Typography>
          <Typography
            variant="body1"
            style={{
              marginBottom: "0.5rem",
              color: "#96A2B4", // Set the text color to #96A2B4
            }}
          >
            Price: ${product.price}
          </Typography>
          <Typography
            variant="body1"
            style={{
              marginBottom: "0.5rem",
              color: "#96A2B4", // Set the text color to #96A2B4
            }}
          >
            Status: {product.status}
          </Typography>
          <Typography
            variant="body1"
            style={{
              marginBottom: "0.5rem",
              color: "#96A2B4", // Set the text color to #96A2B4
            }}
          >
            Average Rating: {product.average_rating}
          </Typography>

          <Link href={`/products/${product._id}`} passHref>
            <Button variant="contained"  style={{ textDecoration: "none",fontWeight:500,marginTop:"2px",backgroundColor:"#4758B8",padding:"6px 10px",fontWeight:"500" }}>
            View Details 
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

export default AllProducts;
