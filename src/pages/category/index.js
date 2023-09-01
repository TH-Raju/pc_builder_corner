import React from "react";
import {
  Box,
  Typography,
  Card,
  CardActionArea,
  CardContent,
  Grid,
  CardMedia,
} from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import { Button } from "antd";
import { customColor } from "../../../utils/colors";

const ProductCategory = ({ products }) => {
  const cardHeight = 350;
  return (
    <Box
      style={{
        marginBottom: "4rem",
        padding: "4rem",
      }}
    >
      <Typography
        style={{ textAlign: "center", color: "#2196F3", fontWeight: "600" }}
        variant="h4"
        component="h1"
        gutterBottom
      >
        Our Products
      </Typography>
      <Grid container spacing={3} mt={4}>
        {products?.category?.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            
            <Card
              className="Card-root"
              style={{
                width: "100%",
                height: cardHeight,
                backgroundColor: "#1A202E",
              }}
            >
              <CardActionArea
                style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
              >
                <CardMedia
                  component="img"
                  style={{
                    height: "200px",
                    width: "100%",
                    objectFit: "contain",
                    padding: "14px",
                  }}
                  src={product.image}
                  alt={product.name}
                />
                <Typography  style={{ color: "white",fontWeight:"600",margin:"6px 0" }} variant="h6">
                  {product?.categories_name}
                </Typography>
                <Link href={`/category/${product?._id}`} passHref>
                <button style={{padding:"10px 30px",borderRadius:"4px",backgroundColor:customColor.buttonColor,border:"none",color:"white",fontWeight:"400",fontSize:"16px",cursor:"pointer"}}>View All</button>
                </Link>
              </CardActionArea>
            </Card>
         
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ProductCategory;
