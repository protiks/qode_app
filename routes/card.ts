import express from 'express'
import { getCard, postActivateCard } from '../controllers/cardController'
const cardsRoutes = express.Router()

cardsRoutes.get('/:cardID', getCard)
cardsRoutes.post('/:cardID', postActivateCard)   

export default cardsRoutes