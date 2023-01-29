import { Router } from "express";
import { Product } from "../models";

export const productsRouter = Router();

const SORT_TYPES = {
  PRICE_ASC: { price: 1 },
  PRICE_DESC: { price: -1 },
};

productsRouter.get("/", async (req, res) => {
  const { sort, category, shop } = req.query;
  // sort =

  const products = await Product.find({
    category,
    shop,
    unavailable: false,
  })
    // .sort(SORT_TYPES[sort])
    .populate("category")
    .populate("shop");
  // const products = await Product.find({ unavailable: false }).populate("category").populate("shop");
  res.send(products);
});
