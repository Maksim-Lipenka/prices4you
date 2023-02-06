import { CheerioCrawler, log, LogLevel, RequestHandler, CheerioCrawlingContext, RequestOptions } from 'crawlee'
import { FilterType } from '../models/product'
import { CATEGORIES } from './consts'
import { MOTHERBOARDS_FILTERS, PROCESSORS_FILTERS, VIDEOCARDS_FILTERS } from './filters'

log.setLevel(LogLevel.DEBUG)

export type RequestHandlerType = RequestHandler<CheerioCrawlingContext>

export const createCrawler = (requestHandler: RequestHandlerType, requestList: RequestOptions[]) => {
  const PCROOMCrawler = new CheerioCrawler({
    // The crawler downloads and processes the web pages in parallel, with a concurrency
    // automatically managed based on the available system memory and CPU (see AutoscaledPool class).
    // Here we define some hard limits for the concurrency.
    minConcurrency: 10,
    maxConcurrency: 50,
    // On error, retry each page at most once.
    maxRequestRetries: 1,
    // Increase the timeout for processing of each page.
    requestHandlerTimeoutSecs: 30,
    requestHandler,
    // This function is called if the page processing failed more than maxRequestRetries + 1 times.
    failedRequestHandler({ request }) {
      log.debug(`Request ${request.url} failed twice.`)
    },
  })

  return async () => {
    await PCROOMCrawler.run(requestList)
  }
}

export const getFilters = ({categoryId, productName}: {categoryId: number, productName: string}) => {
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
  } else if (Number(categoryId) === CATEGORIES.MOTHERBOARDS.id) {
    let manufacturer = 0 // 0 = unknown
    MOTHERBOARDS_FILTERS.manufacturer.options.find((filter) => {
      if (productName.toLowerCase().includes(filter.label.toLowerCase())) {
        manufacturer = filter.id
      }
    })
    filters.manufacturer = manufacturer

    let chipset = 0 // 0 = unknown
    MOTHERBOARDS_FILTERS.chipset.options.find((filter) => {
      if (filter.keywords.every((keyword) => productName.toLowerCase().includes(keyword.toLowerCase()))) {
        chipset = filter.id
      }
    })
    filters.chipset = chipset
  } else if (Number(categoryId) === CATEGORIES.PROCESSORS.id) {
    let manufacturer = 0 // 0 = unknown
    PROCESSORS_FILTERS.manufacturer.options.find((filter) => {
      if (productName.toLowerCase().includes(filter.label.toLowerCase())) {
        manufacturer = filter.id
      }
    })
    filters.manufacturer = manufacturer

    let modelLineup = 0 // 0 = unknown
    PROCESSORS_FILTERS.modelLineup.options.find((filter) => {
      if (
        filter.regexp?.test(productName) ||
        filter.keywords?.every((keyword) => productName.toLowerCase().includes(keyword.toLowerCase()))
      ) {
        modelLineup = filter.id
      }
    })
    filters.modelLineup = modelLineup
  }

  return filters
}
