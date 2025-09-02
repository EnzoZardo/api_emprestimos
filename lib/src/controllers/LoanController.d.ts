import { Request, Response } from 'express';
declare const listCredits: (req: Request, res: Response) => Promise<void>;
declare const createCustomerLoan: (req: Request, res: Response) => Promise<void>;
declare const deleteCustomerLoan: (req: Request, res: Response) => Promise<void>;
declare const listLoans: (req: Request, res: Response) => Promise<void>;
export { listCredits, deleteCustomerLoan, createCustomerLoan, listLoans };
