import { log } from 'crawlee'
import { Product } from '../../models'
import { FilterType, ProductType } from '../../models/product'
import { CATEGORIES, SHOPS } from '../consts'
import { createCrawler, RequestHandlerType } from '../utils'
import { URLS_PCROOM } from './consts'
import { VIDEOCARDS_FILTERS } from '../filters'

const requestList = Object.entries(URLS_PCROOM).map(([categoryId, url]) => ({
  url,
  userData: { categoryId },
}))

const requestHandler: RequestHandlerType = async ({ request, $ }) => {
  log.info(`Processing ${request.url}...`)

  const products: ProductType[] = []
  $('.product-wrapper').each((_, el) => {
    const { categoryId } = request.userData

    const price = $(el).find('.price > ins').text() || $(el).find('.price').text()
    const dotIndex = price.indexOf('.')
    const rawPrice = price.slice(0, dotIndex).replace(',', '').trim()

    // extenalId is the last part of the url path (e.g. https://pcroom.ge/producti/1234567/)
    const splittedUrl = $(el).find('.wd-entities-title > a').attr('href')?.split('/')
    const externalId = splittedUrl?.[splittedUrl.length - 2] || null
    if (!externalId) log.error('externalId is null!')

    const productName = $(el).find('.wd-entities-title').text()

    const filters: FilterType = {}
    if (Number(categoryId) === CATEGORIES.VIDEOCARDS.id) {
      let manufacturer = 0 // 0 = unknown
      VIDEOCARDS_FILTERS.manufacturer.options.find((filter) => {
        if (productName.toLowerCase().includes(filter.label.toLowerCase())) {
          manufacturer = filter.id
        }
      })
      filters.manufacturer = manufacturer

      let gpu = 0 // 0 = unknown
      VIDEOCARDS_FILTERS.gpu.options.find((filter) => {
        if (filter.keywords.every((keyword) => productName.toLowerCase().includes(keyword.toLowerCase()))) {
          gpu = filter.id
        }
      })
      filters.gpu = gpu
    }

    // don't forget to update update product part of the code if you change this
    products.push({
      name: productName,
      price: Number(rawPrice),
      imageUrl: $(el).find('.product-image-link > img').attr('data-wood-src'),
      url: $(el).find('.product-image-link').attr('href')!,
      category: categoryId,
      shop: SHOPS.PCROOM.id,
      externalId: externalId!,
      filters
    })
  })

  // update existing products with new data, create new products, archive products that are not in the list
  const productsIds = products.map((p) => p.externalId)
  const productsToUpdate = await Product.find({
    externalId: { $in: productsIds },
    shop: SHOPS.PCROOM.id,
    category: request.userData.categoryId,
  })
  const productsToCreate = products.filter((p) => !productsToUpdate.find((pu) => pu.externalId === p.externalId))
  const productsToArchive = await Product.find({
    externalId: { $nin: productsIds },
    shop: SHOPS.PCROOM.id,
    category: request.userData.categoryId,
    unavailable: false,
  })

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

  log.info(`PC Room products saved to database. Category: ${request.userData.categoryId}`)
}

export const scrapePCRoom = createCrawler(requestHandler, requestList)
