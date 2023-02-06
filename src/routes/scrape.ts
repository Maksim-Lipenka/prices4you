import { Router } from "express";
import { scrapePCRoom } from "../parsers/pcroom";
import { scrapeGITEC } from "../parsers/gitec";

export const scrapeRouter = Router();

scrapeRouter.put("/pcroom", async (req, res) => {
  // spread products to database
  await scrapePCRoom();
  res.send("ok");
});

scrapeRouter.put("/gitec", async (req, res) => {
  // spread products to database
  await scrapeGITEC();
  res.send("ok");
});
