import mongoose from 'mongoose'

export interface BaseDocumentType extends mongoose.Document {
  _id?: number
}
