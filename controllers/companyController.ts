import { Request, Response } from 'express';
import HttpStatus from '../HttpStatus';
import { retrieveAllCompanyNames, retrieveCompanyDataById, createCompany } from '../models/companyModels';

export const getCompanies = async (_req: Request, res: Response) => {
  try {
    const companies = await retrieveAllCompanyNames()
    res.status(HttpStatus.OK).json({ data: companies });
  } catch (error) {
    console.error(error);
    res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ error: 'Error getting company names from data' });
  }
};

export const getCompanyByID = async (req: Request, res: Response) => {
  const companyId = parseInt(req.params.id);
  if (isNaN(companyId)) {
    res.status(HttpStatus.BAD_REQUEST).send('Invalid company id');
    return;
  }
  try {
    const company = await retrieveCompanyDataById(companyId.toString());
    const data = { data: company };
    res.status(HttpStatus.OK).json(data);
  } catch (error) {
    console.error(error);
    res.status(HttpStatus.INTERNAL_SERVER_ERROR).send('Error getting company data');
  }
};

export const postCompany = async (req: Request, res: Response) => {
  const { name } = req.body;
  if (!name) {
    res.status(HttpStatus.BAD_REQUEST).json({
      errors: [{ title: 'Bad Request', detail: 'Company name is required.' }]
    });
    return;
  }
  try {
    const createNewCompany = await createCompany(name.toString())
    const data = { data: createNewCompany };
    res.status(HttpStatus.CREATED).json(data);
  } catch (error) {
    console.error(error)
    res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
      errors: [{ title: 'Internal Server Error', detail: 'Error adding company data to database.' }]
    });
  }
};

