import { createRouter } from "next-connect";
import dbConnect from "../../../../backend/config/dbConnenct";
import { getProducts } from "../../../../backend/controllers/productsControllers";

const router = createRouter();

dbConnect();

router.get(getProducts);

export default router.handler();
