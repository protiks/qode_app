import express from 'express';
import companyRoutes from './companies'
import cardsRoutes from './card';
import transactionsRoutes from './transactions';
const api = express.Router();

api.use('/company', companyRoutes)
api.use('/card', cardsRoutes)
api.use('/transactions', transactionsRoutes)

export default api