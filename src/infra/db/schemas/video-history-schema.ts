import mongoose from 'mongoose'

const baseSchema = new mongoose.Schema({
  userId: String,
  videoTitle: String,
  thumb: String,
  dateViewed: { type: Date, default: Date.now }
})

export const User = mongoose.model('history', baseSchema)
