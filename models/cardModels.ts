import pool from '../db'

export const retrieveAllCards = async (cardID: number) => {
    console.log(cardID)
    try {
        const query = {
            text: 'SELECT * FROM cards WHERE id = $1',
            values: [cardID],
        }
        const result = await pool.query(query)
        return result
    } catch (error) {
        console.error(error)
        throw new Error('Error getting Card details from Database')
    }
}

export const activateCard = async (cardID: number) => {
    const query = {
        text: 'UPDATE cards SET active = true WHERE id = $1 RETURNING *',
        values: [cardID]
    }
    try {
        const result = await pool.query(query)
        if (result.rowCount === 0) {
            throw new Error('Card not found')
        }
        return result.rows[0]
    } catch (error) {
        console.error(error)
        throw new Error('Error activating card on the Database')
    }
}
