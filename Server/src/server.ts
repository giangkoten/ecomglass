import express from "express";
import cors from "cors";
import morgan from "morgan";
import bodyParser from "body-parser";
import dotenv from "dotenv";

const app = express();
const port: number = 8080;

dotenv.config();

import authRouter from "./routes/auth.routes";
import glassRouter from "./routes/glass.routes";
import detailRouter from "./routes/detail.routes";
import mediaRouter from "./routes/media.routes";
import orderRouter from "./routes/order.routes";
import userRouter from "./routes/user.routes";

//admin
import productRouter from "./routes/admin/product.routes";
app.use(cors());
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use("/api/v1/auth", authRouter);

//User
app.use("/api/v1/user", userRouter);

//Shop
app.use("/api/v1/shop", glassRouter);

//detail
app.use("/api/v1/detail", detailRouter);

//media
app.use("/api/v1/media", mediaRouter);
//order
app.use("/api/v1/order", orderRouter);
// admin
app.use("/api/v1/admin", productRouter);
app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
