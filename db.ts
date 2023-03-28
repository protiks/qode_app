import { Pool } from 'pg'

const pool = new Pool({
  user: process.env.DB_USER || 'me',
  host: process.env.DB_HOST || 'localhost',
  database: process.env.DB_NAME || 'swtkatz',
  password: process.env.DB_PASSWORD || 'password',
  port: process.env.DB_PORT ? parseInt(process.env.DB_PORT) : 5432
})

export default pool
