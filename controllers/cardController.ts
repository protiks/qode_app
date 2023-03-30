import { Request, Response } from 'express'
import HttpStatus from '../HttpStatus';
import { retrieveAllCards } from '../models/cardModels';

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

export const postActivateCard = (req: Request, res: Response) => {
    const cardID = parseInt(req.params.cardID)
    console.log(cardID)
    try {
        res.send(cardID)
    } catch (error) {
        console.log(error)
    }
}