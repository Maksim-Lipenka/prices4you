import dotenv from 'dotenv'
dotenv.config()
import { startDatabase } from './src/database'
import { Category, Shop } from './src/models'
import { initialCategories } from './src/models/category'
import { initialShops } from './src/models/shop'

const scrape = async () => {
  await startDatabase()

  const categoriesCount = await Category.countDocuments()
  if (categoriesCount === 0) {
    await Category.insertMany(initialCategories)
    console.log('Categories created.')
  }

  const shopsCount = await Shop.countDocuments()
  if (shopsCount === 0) {
    await Shop.insertMany(initialShops)
    console.log('Shops created.')
  }

  console.log('Done.')
  process.exit(0)
}

scrape()
