import mongoose from 'mongoose'

const baseSchema = new mongoose.Schema({
  userId: String,
  videoId: String,
  videoTitle: String,
  thumb: String,
  dateViewed: { type: Date, default: Date.now }
})

export const History = mongoose.model('history', baseSchema)
