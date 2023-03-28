import pool from '../db';
import { Request, Response } from 'express'
import HttpStatus from '../HttpStatus';

export const getTransactions = async (req: Request, res: Response) => {
    try {
        const cardID = req.params.cardID;
        console.log(cardID)
        if (!cardID || isNaN(Number(cardID))) {
            return res.status(HttpStatus.BAD_REQUEST).json({ error: 'Invalid card ID' });
        }
        const { rows } = await pool.query(
            'SELECT * FROM transactions WHERE card_id = $1',
            [cardID]
        );
        res.json({ data: rows });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
    }
}


