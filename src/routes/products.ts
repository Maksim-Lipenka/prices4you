import { Router } from "express";
import { CATEGORIES, CategoriesEnum } from "../parsers/consts";
import { Product } from "../models";
import { FILTERS, FiltersEnum, FiltersQuery } from '../parsers/filters'

export const productsRouter = Router();

const SORT_TYPES = {
  price_asc: { price: 1 },
  price_desc: { price: -1 },
  no_sort: {},
};

enum Sort {
  PRICE_ASC = 'price_asc',
  PRICE_DESC = 'price_desc',
  NO_SORT = 'no_sort',
}

type QueryType = {
  sort?: Sort
  category?: string
  shop?: string
  page?: number
  perPage?: number
  search?: string
} & FiltersQuery

productsRouter.get("/", async (req, res) => {
  const { sort = Sort.NO_SORT, category, shop, page, perPage, search, ...queryFilters }: QueryType = req.query

  const filters: {[key: string]: unknown} = {}
  if (category) {
    const caterogyKey: CategoriesEnum = Object.values(CATEGORIES).find((c) => c.id === Number(category))?.key
    if (caterogyKey) {
      const categoryFiltersKeys = Object.keys(FILTERS[caterogyKey]) as FiltersEnum[]
      const queryFiltersKeys = categoryFiltersKeys.filter((key) => queryFilters[key])
      queryFiltersKeys.forEach((key) => {
        filters[`filters.${key}`] = { $in: queryFilters[key].split(',').map(f => Number(f)) }
      })
    };
  }

  const query = {
    ...(category && { category }),
    ...(shop && { shop }),
    unavailable: false,
    ...filters,
    ...(search && { name: { $regex: search, $options: "i" } }),
  };

  const options = {
    page: page || 1,
    limit: perPage || 10,
    sort: SORT_TYPES[sort],
    populate: ['category', 'shop'],
  }

  const products = await Product.paginate(query, options)

  const {docs, ...meta} = products
  res.send({
    items: docs,
    meta,
  })
});
