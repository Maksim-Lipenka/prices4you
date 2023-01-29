import { Router } from "express";
import { Category } from "../models/category";
import { Product } from "../models/product";
import { SHOPS } from "../parsers/consts";
import { scrapePCRoom } from "../parsers/pcroom/index";

export const scrapeRouter = Router();

scrapeRouter.put("/pcroom", async (req, res) => {
  // spread products to database
  await scrapePCRoom();
  res.send("ok");
});
