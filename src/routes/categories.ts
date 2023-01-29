import { Router } from "express";
import { Category } from "../models/category";

export const categoriesRouter = Router();

categoriesRouter.get("/", async (req, res) => {
  const categories = await Category.find();
  res.send(categories);
});
