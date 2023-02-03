import { Router } from 'express'
import { CATEGORIES, CategoriesEnum } from '../parsers/consts'
import { FILTERS } from '../parsers/filters'

export const filtersRouter = Router()

filtersRouter.get('/:categoryId', async (req, res) => {
  const { categoryId } = req.params as { categoryId: CategoriesEnum }
  
  const categoryKey = Object.values(CATEGORIES).find((c) => c.id === Number(categoryId))?.key
  const filters = FILTERS[categoryKey]

  res.send(filters)
})
