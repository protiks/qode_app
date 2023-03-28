import { SQL } from 'sql-template-strings'

export const GET_COMPANIES = SQL`
    SELECT name FROM companies
`
export const GET_COMPANIES_BY_ID = SQL`
SELECT * FROM companies WHERE id = $1
`
