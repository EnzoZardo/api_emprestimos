export const personalCredit = Object.freeze({
  condition: (income, age, location) =>
    income < 3000 ||
    (income > 3000 && income < 5000 && age < 30 && location == "RS"),
  credit: {
    type: "PERSONAL",
    interest_rate: 4,
  },
});

export const guaranteedCredit = Object.freeze({
  condition: (income, age, location) =>
    income <= 3000 ||
    (income > 3000 && income < 5000 && age < 30 && location == "RS"),
  credit: { type: "GUARANTEED", interest_rate: 3 },
});

export const consignmentCredit = Object.freeze({
  condition: (income) => income >= 5000,
  credit: { type: "CONSIGNMENT", interest_rate: 2 },
});
