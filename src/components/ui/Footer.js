import React from "react";
import { Typography, Grid, Link, IconButton } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import { customColor } from "../../../utils/colors";


const footerStyle = {
  color: "#fff",
  padding: "24px",
};

const contactInfoStyle = {
  paddingTop: "8px", // Adjust the padding value as needed
};

const Footer = () => {
  const combinedFooterStyle = {
    ...footerStyle,
    backgroundColor:customColor.cardColor
  };

  const iconStyle = {
    marginRight: "8px",
  };

  return (
    <footer style={combinedFooterStyle}>
      <Grid container alignItems="center" spacing={2}>
        <Grid item xs={12} sm={4} md={4}>
          <Typography variant="h4" style={{ marginBottom: "16px",fontWeight:"600",color:customColor.buttonSecondery }}>
        Pc Mart
          </Typography>
          <Typography variant="body2">
            Design and customize your dream PC configuration with us.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={4} md={4}>
          <Typography variant="subtitle1">Follow us:</Typography>
          <IconButton
            component={Link}
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener"
            color="inherit"
            style={iconStyle}
          >
            <FacebookIcon />
          </IconButton>
          <IconButton
            component={Link}
            href="https://www.twitter.com/"
            target="_blank"
            rel="noopener"
            color="inherit"
            style={iconStyle}
          >
            <TwitterIcon />
          </IconButton>
          <IconButton
            component={Link}
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener"
            color="inherit"
            style={iconStyle}
          >
            <InstagramIcon />
          </IconButton>
        </Grid>
        <Grid item xs={12} sm={4} md={4} style={contactInfoStyle}>
          <Typography variant="subtitle1">Contact us:</Typography>
          <Typography variant="body2">Email: info@pcbuilder.com</Typography>
          <Typography variant="body2">Phone: (123) 456-7890</Typography>
          <Typography variant="body2">Address: 1234 Main Street, City, Country</Typography>
        </Grid>
      </Grid>
    </footer>
  );
};

export default Footer;
