import { Request, Response } from 'express'
import HttpStatus from '../HttpStatus';
import { retrieveAllCards, activateCard } from '../models/cardModels';

export const getCard = async (req: Request, res: Response) => {
    const cardID = parseInt(req.params.cardID)
    console.log('here', cardID)
    try {
        const result = await retrieveAllCards(cardID)
        const card = result.rows[0]
        if (card === null) {
            res.status(HttpStatus.NOT_FOUND).send('Card not found')
        } else {
            res.status(HttpStatus.NOT_FOUND).send(card)
        }
    } catch (error) {
        console.error(error)
        res.status(HttpStatus.INTERNAL_SERVER_ERROR).send('Internal Server Error')
    }
}

export const postActivateCard = async (req: Request, res: Response) => {
    const cardID = parseInt(req.params.cardID)
    try {
        const updatedCard = await activateCard(cardID)
        res.status(HttpStatus.OK).json(updatedCard);
    } catch (error) {
        console.error(error)
        res.status(HttpStatus.INTERNAL_SERVER_ERROR).send('Internal Server Error')
    }
}