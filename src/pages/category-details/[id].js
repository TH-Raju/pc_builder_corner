import { useGetCategoryProductQuery } from "@/redux/features/category/categoryApi";
import { useRouter } from "next/router";
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Grid,
} from "@mui/material";
import dynamic from "next/dynamic";
import { customColor } from "../../../utils/colors";
const RootLayout = dynamic(
  () => import("../../components/layouts/RootLayout"),
  {
    ssr: false,
  }
);

const CategoryProductDetails = () => {
  const router = useRouter();
  const id = router.query.id;
  const { data } = useGetCategoryProductQuery(id);
  const product = data?.product;
  console.log(product?.image);
  return (
    <Box
      style={{
        marginBottom: "4rem",
        padding: "4rem",
      }}
    >
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Card style={{backgroundColor:customColor.cardColor}}>
            <CardMedia
              component="img"
              style={{ height: "auto", width: "100%",backgroundColor:customColor.cardColor }}
              src={product?.image}
              alt={product?.name}
            />
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
        <Card style={{ backgroundColor: customColor.cardColor }}>
  <CardContent>
    <Typography variant="h4" component="h1" gutterBottom style={{ color: "white" }}>
      {product?.name}
    </Typography>
    <Typography variant="body1" gutterBottom style={{ color: "white" }}>
      <strong>Brand:</strong> {product?.key_features.Brand}
    </Typography>
    <Typography variant="body1" gutterBottom style={{ color: "white" }}>
      <strong>Model:</strong> {product?.key_features.Model}
    </Typography>
    <Typography variant="body1" gutterBottom style={{ color: "white" }}>
      <strong>Specification:</strong> {product?.key_features.Specification}
    </Typography>
    <Typography variant="body1" gutterBottom style={{ color: "white" }}>
      <strong>Socket:</strong> {product?.key_features.Socket}
    </Typography>
    <Typography variant="body1" gutterBottom style={{ color: "white" }}>
      <strong>Clock Speed:</strong> {product?.key_features["Clock Speed"]}
    </Typography>
    <Typography variant="body1" gutterBottom style={{ color: "white" }}>
      <strong>TDP:</strong> {product?.key_features.TDP}
    </Typography>
    <Typography variant="body1" gutterBottom style={{ color: "white" }}>
      <strong>Price:</strong> {product?.price}
    </Typography>
    <Typography variant="body1" gutterBottom style={{ color: "white" }}>
      <strong>Status:</strong> {product?.status}
    </Typography>
    <Typography variant="body1" gutterBottom style={{ color: "white" }}>
      <strong>Individual Rating:</strong> {product?.individual_rating}
    </Typography>
    <Typography variant="body1" gutterBottom style={{ color: "white" }}>
      <strong>Average Rating:</strong> {product?.average_rating}
    </Typography>
    <Typography variant="body1" gutterBottom style={{ color: "white" }}>
      <strong>Description:</strong> {product?.description}
    </Typography>
    <Typography variant="h6" component="h2" gutterBottom style={{ color: "white" }}>
      Reviews:
    </Typography>
    {product?.reviews?.map((review) => (
      <Box key={review._id} mt={1} p={1} border={4} style={{border:`4px solid ${customColor.buttonSecondery}`}}>
        <Typography variant="body1" gutterBottom style={{ color: "white" }}>
          <strong>Author:</strong> {review.author}
        </Typography>
        <Typography variant="body1" gutterBottom style={{ color: "white" }}>
          <strong>Rating:</strong> {review.rating}
        </Typography>
        <Typography variant="body1" style={{ color: "white" }}>
          {review.comment}
        </Typography>
      </Box>
    ))}
  </CardContent>
</Card>;

        </Grid>
      </Grid>
    </Box>
  );
};
export default CategoryProductDetails;
CategoryProductDetails.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
