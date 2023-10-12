import mongoose from 'mongoose'

const baseSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String
})

baseSchema.add({
  videoHistory: [
    {
      videoId: String,
      dateViewed: { type: Date, default: Date.now }
    }
  ]
})

export const User = mongoose.model('User', baseSchema)
