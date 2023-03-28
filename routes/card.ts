import express from 'express'
import { getCard } from '../controllers/cardController'
const cardsRoutes = express.Router()

cardsRoutes.get('/:cardID', getCard)

export default cardsRoutes