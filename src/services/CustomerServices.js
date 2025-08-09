const customers = [];

export const saveCustomer = (customer) => {
  if (!customers.find((x) => customer.cpf == x.cpf)) {
    customers.push(customer);
  }
};

export const findAll = () => {
  return customers;
};
