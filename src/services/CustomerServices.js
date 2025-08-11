const customers = [];

export const saveCustomer = (customer) => {
    customers.push(customer);
};

export const findByCpf = (cpf) => {
  return customers.find((x) => cpf == x.cpf)
}

export const findAll = () => {
  return customers;
};
