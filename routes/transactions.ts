import express from 'express'
import { getTransactions } from '../controllers/transactionsController'
const transactionsRoutes = express.Router()

transactionsRoutes.get('/:cardID', getTransactions)

export default transactionsRoutes