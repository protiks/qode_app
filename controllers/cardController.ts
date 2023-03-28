import pool from '../db';
import { Request, Response } from 'express'
import HttpStatus from '../HttpStatus';

export const getCard = async (req: Request, res: Response) => {
    const cardID = parseInt(req.params.cardID)
    console.log(cardID)
    try {
        const result = await pool.query('SELECT * FROM cards WHERE id = $1', [cardID])
        const card = result.rows[0]
        if (card === null) {
            res.status(HttpStatus.NOT_FOUND).send('Card not found')
        } else {
            res.status(HttpStatus.NOT_FOUND).send(card)
        }
    } catch (error) {
        console.error(error)
        res.status(500).send('Internal Server Error')
    }
}
