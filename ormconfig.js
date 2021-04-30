require('dotenv').config()
const { resolve } = require('path')

const {
  DATABASE_HOST, DATABASE_DB, DATABASE_PASS, DATABASE_USER,
} = process.env

const readMigrationsPath = ['./src/database/migrations/**.ts']
const createMigrationsPath = './src/database/migrations'

module.exports = {
  type: 'mysql',
  host: DATABASE_HOST,
  username: DATABASE_USER,
  password: DATABASE_PASS,
  database: DATABASE_DB,
  migrations: readMigrationsPath,
  cli: {
    migrationsDir: createMigrationsPath,
  },
}
