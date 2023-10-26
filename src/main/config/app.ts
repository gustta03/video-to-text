import { setupRoutes } from '@/main/config/routes'
import cors from 'cors'
import express, { json } from 'express'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
app.use(json())
app.use(cors({
  origin: '*'
}))

setupRoutes(app)
export default app
