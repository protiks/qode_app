import { Request, Response } from 'express'
import HttpStatus from '../HttpStatus';
import { retrieveTransactionsByCardID } from '../models/transactionModels';

export const getTransactions = async (req: Request, res: Response) => {
    const cardID = parseInt(req.params.cardID);
    if (!cardID || isNaN(Number(cardID))) {
        return res.status(HttpStatus.BAD_REQUEST).json({ error: 'Invalid card ID' });
    }
    try {
        const result = await retrieveTransactionsByCardID(cardID)
        const transactions = result
        console.log('thisone', transactions)
        res.send({ transactions });
    } catch (error) {
        console.error(error);
        res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ error: 'Server error' });
    }
}


