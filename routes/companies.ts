// companyRoutes.js
import express from 'express';
import { getCompanies, getCompanyByID, createCompany } from '../controllers/companyController';

const companyRoutes = express.Router();

companyRoutes.get('/', getCompanies);
companyRoutes.get('/:id', getCompanyByID);
companyRoutes.post('/', createCompany);

export default companyRoutes
