import express, { Application, Request, Response } from 'express'
import cors from 'cors'
const app: Application = express()

app.use(cors())

// parse
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req: any, res: Response) => {
  res.send('Hello World!')
})

export default app
