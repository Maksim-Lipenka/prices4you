import mongoose from "mongoose";
import { CATEGORIES } from "../parsers/consts";

export type CategoryType = {
  _id?: number;
  name: string;
};

const CategorySchema = new mongoose.Schema({
  _id: {
    type: Number,
    required: true,
  },
  __v: { type: Number, select: false },
  name: {
    type: String,
    required: true,
  },
});

CategorySchema.virtual("id").get(function () {
  return this._id;
});
CategorySchema.set("toJSON", {
  virtuals: true,
  transform: function (doc, ret) {
    delete ret._id;
  },
});

export const Category = mongoose.model("Category", CategorySchema);

export const initialCategories = Object.values(CATEGORIES).map(
  ({ id, name }) => ({ _id: id, name })
);
