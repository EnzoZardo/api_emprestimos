import { findAll } from "../services/CustomerServices.js";

export const listCustomers = (req, res) => {
  const users = findAll();
  res.json(users);
};
