import 'reflect-metadata'
import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import cookieParser from 'cookie-parser'

import createConnection from './database/config'

import { routes } from './routes'

const app = express()
// enable cors
app.use(cors())
// protection headers
app.use(helmet())
// use cookie
app.use(cookieParser())
app.use(express.json())
// routes
app.use(routes)

const port = process.env.PORT || 3000
const serverConfig = { port, cors: '*' }

app.listen(serverConfig, async () => {
  console.log(`Servidor inicializado em http://localhost:${port}`)
  // Banco de dados
  await createConnection()
})
