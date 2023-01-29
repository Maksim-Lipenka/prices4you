import mongoose from "mongoose";
import { AutoIncrement } from "../database";

export const PRODUCT_COUNTER_ID = "product_id";

export type ProductType = {
  _id?: number;
  name: string;
  price: number;
  imageUrl?: string;
  sku?: string;
  code?: string;
  url: string;
  category: number;
  shop: number;
  externalId: string;
  unavailable?: boolean;
};

const ProductSchema = new mongoose.Schema({
  _id: Number,
  __v: { type: Number, select: false },
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  imageUrl: String,
  sku: String,
  code: String,
  url: {
    type: String,
    required: true,
  },
  category: {
    type: Number,
    ref: "Category",
  },
  shop: {
    type: Number,
    ref: "Shop",
    required: true,
  },
  externalId: {
    type: String,
    required: true,
  },
  unavailable: {
    type: Boolean,
    default: false,
  },
});
// @ts-ignore
ProductSchema.plugin(AutoIncrement, {
  id: PRODUCT_COUNTER_ID,
  inc_field: "_id",
});
ProductSchema.virtual("id").get(function () {
  return this._id;
});
ProductSchema.set("toJSON", {
  virtuals: true,
  transform: function (doc, ret) {
    delete ret._id;
  },
});

export const Product = mongoose.model("Product", ProductSchema);
