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
        text: '',
        value: [cardID]
    }
    try {
        const activateCard = await pool.query(query)
        return activateCard
    } catch (error) {
        console.error(error)
        throw new Error('Error activating card on the Database')
    }
}