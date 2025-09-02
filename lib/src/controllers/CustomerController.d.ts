import { Request, Response } from 'express';
declare const listCustomers: (_: Request, res: Response) => Promise<void>;
declare const findCustomer: (req: Request, res: Response) => Promise<void>;
declare const createCustomer: (req: Request, res: Response) => Promise<void>;
declare const deleteCustomer: (req: Request, res: Response) => Promise<void>;
export { findCustomer, listCustomers, deleteCustomer, createCustomer };
