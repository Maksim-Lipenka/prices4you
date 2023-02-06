import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";
import { AutoIncrement } from "../database";
import { BaseDocumentType } from "./types";

export const PRODUCT_COUNTER_ID = "product_id";

export type FilterType = { [key: string]: number };

export type ProductType = {
  _id?: number
  name: string
  price: number
  imageUrl?: string
  sku?: string | null
  code?: string
  url: string
  category: number
  shop: number
  externalId: string
  unavailable?: boolean
  filters?: FilterType
}

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
    ref: 'Category',
  },
  shop: {
    type: Number,
    ref: 'Shop',
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
  filters: {
    // structure: { filterKey: filterId}
    type: mongoose.SchemaTypes.Mixed,
    default: {},
  },
})
ProductSchema.plugin(mongoosePaginate);
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

interface ProductDocument extends BaseDocumentType, ProductType {}
export const Product = mongoose.model<ProductDocument, mongoose.PaginateModel<ProductDocument>>('Product', ProductSchema)
