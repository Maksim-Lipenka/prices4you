import { Router } from "express";
import { categoriesRouter } from "./categories";
import { productsRouter } from "./products";
import { scrapeRouter } from "./scrape";
import { filtersRouter } from "./filters";

export const router = Router();

router.use("/categories", categoriesRouter);
router.use("/products", productsRouter);
router.use("/scrape", scrapeRouter);
router.use("/filters", filtersRouter);
