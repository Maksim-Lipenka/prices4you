import mongoose from "mongoose";
import { SHOPS } from "../parsers/consts";

export type ShopType = {
  _id?: number;
  name: string;
  url: string;
};

const ShopSchema = new mongoose.Schema({
  _id: Number,
  __v: { type: Number, select: false },
  name: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
});
ShopSchema.virtual("id").get(function () {
  return this._id;
});
ShopSchema.set("toJSON", {
  virtuals: true,
  transform: function (doc, ret) {
    delete ret._id;
  },
});

export const Shop = mongoose.model("Shop", ShopSchema);

export const initialShops = Object.values(SHOPS).map(({ id, name, url }) => ({
  _id: id,
  name,
  url,
}));
