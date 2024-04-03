import express from "express";
import cors from "cors";
import { config } from "dotenv";
import { dbConnect } from "./lib/dbConnect";
import { compilerRouter } from "./routes/compilerRouter";
import { userRouter } from "./routes/UserRouter";
const app = express();
const PORT = 4000;

app.use(express.json());
app.use(cors());
config();

app.use("/compiler", compilerRouter);
app.use("/user", userRouter);

dbConnect();
app.listen(PORT, () => {
  console.log(`localhost is running on ${PORT}`);
});
