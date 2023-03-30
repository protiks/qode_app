// companyRoutes.js
import express from 'express';
import { getCompanies, getCompanyByID, postCompany,  } from '../controllers/companyController';

const companyRoutes = express.Router();

companyRoutes.get('/', getCompanies);
companyRoutes.get('/:id', getCompanyByID);
companyRoutes.post('/', postCompany);

export default companyRoutes
