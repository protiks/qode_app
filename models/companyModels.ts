import pool from '../db';
import { GET_COMPANIES } from '../queries';

interface Company {
    id: number;
    type: string;
    attributes: {
        name: string;
    }
}

const retrieveAllCompanyNames = async (): Promise<Company[]> => {
    try {
        const query = {
            GET_COMPANIES,
        };
        const result = await pool.query(query.GET_COMPANIES);
        const companyNames = result.rows.map((row) => ({
            id: row.id,
            type: 'company',
            attributes: {
                name: row.name,
            },
        }));
        return companyNames;
    } catch (error) {
        console.error(error);
        throw new Error('Error getting company names from data');
    }
};

const retrieveCompanyDataById = async (id: string) => {
  try {
    const query = {
      text: 'SELECT * FROM companies WHERE id = $1',
      values: [id],
    };
    const result = await pool.query(query);
    if (result.rows.length === 0) {
      throw new Error('Company not found');
    } else {
      const company = result.rows[0];
      return {
        id: company.id,
        type: 'company',
        attributes: {
          name: company.name,
        },
      };
    }
  } catch (error) {
    console.error(error);
    throw new Error('Error getting company data');
  }
};

const createCompany = async (name: string) => {
    try {
        const result = await pool.query('INSERT INTO companies (name) VALUES ($1) RETURNING *', [name]);
        const company = result.rows[0];
        return {
            id: company.id,
            type: 'companies',
            attributes: {
                name: company.name,
            },
        };
    } catch (error) {
        console.error(error);
        throw new Error('Error adding company data to database.');
    }
};

export { retrieveAllCompanyNames, retrieveCompanyDataById, createCompany };
