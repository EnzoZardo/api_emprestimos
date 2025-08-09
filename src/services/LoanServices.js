import {
  consignmentCredit,
  guaranteedCredit,
  personalCredit,
} from "../parameters/Parameters.js";
import { saveCustomer } from "./CustomerServices.js";

export const calculateCredits = (data) => {
  const loans = [];
  const { income, location, age, name, cpf } = data;

  saveCustomer({
    name,
    cpf,
    age,
    location,
  });

  if (personalCredit.condition(income, age, location)) {
    loans.push(personalCredit.credit);
  }

  if (guaranteedCredit.condition(income, age, location)) {
    loans.push(guaranteedCredit.credit);
  }

  if (consignmentCredit.condition(income)) {
    loans.push(consignmentCredit.credit);
  }

  return {
    customer: data.name,
    loans,
  };
};
