import React from "react";
import { Box, Typography, Button } from "@mui/material";
import Link from "next/link";

const HeroSection = () => {
  return (
    <Box
      sx={{
        background:
          'url("https://images.unsplash.com/photo-1616266126575-1471ec059439?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGNvbXB1dGVyJTIwZGFya3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60")', // Update with the actual image file name
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "calc(100vh - 64px)", // Adjust the height as needed (excluding the header height)
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        color: "#fff",
      }}
    >
      <Typography variant="h2" style={{ fontWeight: '800', color: "#ffffff" }} component="h1" gutterBottom>
        Welcome To Pc Mart
      </Typography>
      <Typography variant="h5" style={{ fontWeight: "700", color: "#619A52" }} gutterBottom>
        Customize and create your dream PC!
      </Typography>

      <Link href={"/pc-builder"}>
        <Button variant="contained" color="primary" style={{ backgroundColor: "#4758B8", fontWeight: "600" }} size="large">
          Get Started
        </Button>
      </Link>
    </Box>
  );
};

export default HeroSection;
