import { log } from 'crawlee'
import { Product } from '../../models'
import { ProductType } from '../../models/product'
import { SHOPS } from '../consts'
import { createCrawler, getFilters, RequestHandlerType } from '../utils'
import { URLS_GITEC } from './consts'

const requestList = Object.entries(URLS_GITEC).map(([categoryId, url]) => ({
  url,
  userData: { categoryId },
}))

const requestHandler: RequestHandlerType = async ({ request, $ }) => {
  log.info(`Processing ${request.url}...`)

  const products: ProductType[] = []
  $('.product-item').each((_, el) => {
    const { categoryId } = request.userData

    const price = $(el).find('.actual-price').text() || $(el).find('.only-price').text()
    console.log(price);
    const dotIndex = price.indexOf(',')
    const rawPrice = price.slice(0, dotIndex).trim()

    const sku = $(el).find('.sku').text() || null
    const externalId = sku;
    if (!externalId) log.error('ERROR: externalId is null!')

    const productName = $(el).find('.product-title').text()

    const filters = getFilters({ categoryId, productName })

    // don't forget to update update product part of the code if you change this
    products.push({
      name: productName,
      price: !isNaN(Number(rawPrice)) ? Number(rawPrice) : 0,
      imageUrl: $(el).find('.picture-img').attr('src'),
      url: `${SHOPS.GITEC.url}${$(el).find('.picture > a').attr('href')!}`,
      category: categoryId,
      shop: SHOPS.GITEC.id,
      externalId: externalId!,
      filters,
      sku,
    })
  })

  // update existing products with new data, create new products, archive products that are not in the list
  const productsIds = products.map((p) => p.externalId)
  const productsToUpdate = await Product.find({
    externalId: { $in: productsIds },
    shop: SHOPS.GITEC.id,
    category: request.userData.categoryId,
  })
  const productsToCreate = products.filter((p) => !productsToUpdate.find((pu) => pu.externalId === p.externalId))
  const productsToArchive = await Product.find({
    externalId: { $nin: productsIds },
    shop: SHOPS.GITEC.id,
    category: request.userData.categoryId,
    unavailable: false,
  })
  log.info(`GITEC products to update: ${productsToUpdate.length}`)
  log.info(`GITEC products to create: ${productsToCreate.length}`)
  log.info(`GITEC products to archive: ${productsToArchive.length}`)

  await Promise.all([
    // update existing products
    ...productsToUpdate.map(async (product) => {
      const newProduct = products.find((p) => p.externalId === product.externalId)!

      product.name = newProduct.name
      product.price = newProduct.price
      product.imageUrl = newProduct.imageUrl
      product.url = newProduct.url
      product.unavailable = false
      product.filters = newProduct.filters
      product.sku = newProduct.sku

      await product.save()
    }),
    // create new products
    await Product.create(productsToCreate),
    // archive products that are not in the list
    ...productsToArchive.map(async (product) => {
      product.unavailable = true
      await product.save()
    }),
  ])

  log.info(`GITEC products saved to database. Category: ${request.userData.categoryId}`)
}

export const scrapeGITEC = createCrawler(requestHandler, requestList)
