import dotenv from "dotenv"
dotenv.config()
import { startDatabase } from './src/database'
import { startServer } from './src/server'

const start = async () => {
  await startDatabase()
  startServer()
}

start()
