import mongoose from 'mongoose'
import config from './config'
import app from './app'

async function databaseConnection() {
  try {
    await mongoose.connect(config.database_url as string)
    console.log('database connection established')

    app.listen(config.port, () => {
      console.log(`Example app listening on port ${config.port}`)
    })
  } catch (err) {
    console.log('Failed to connect to database', err)
  }
}
databaseConnection()
