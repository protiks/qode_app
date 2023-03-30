import pool from '../db';

export const retrieveTransactionsByCardID = async (cardID: number) => {
    try {
        const query = {
            text: 'SELECT * FROM transactions WHERE card_id = $1',
            values: [cardID]
        }
        const transactionData = await pool.query(query)
        return transactionData

    } catch (error) {
        console.log(error)
        throw new Error('Error getting transaction details from the database')
    }

}