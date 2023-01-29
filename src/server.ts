import express from "express";
import { router } from "./routes";

const PORT = process.env.PORT || 3000;
const app = express();

export const startServer = () => {
  try {
    app.use("/api/", router);
    app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};
