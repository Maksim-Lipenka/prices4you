import { CheerioCrawler, log, LogLevel, RequestHandler, CheerioCrawlingContext, RequestOptions } from 'crawlee'

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
