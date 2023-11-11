import { setupRoutes } from '@/main/config/routes'
import cors from 'cors'
import express, { json } from 'express'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
app.use(cors({
  origin: 'https://gugaa.vercel.app'
}))

app.use(json())

setupRoutes(app)
export default app
