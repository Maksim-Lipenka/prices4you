import mongoose from 'mongoose'
import AutoIncrementCreator from 'mongoose-sequence'
// @ts-ignore
export const AutoIncrement = AutoIncrementCreator(mongoose)

export const startDatabase = async () => {
  mongoose.connection.once('open', () => {
    console.log('Connected to database')
  })
  await mongoose.connect(process.env.DB_CONNECTION_STRING)
}
