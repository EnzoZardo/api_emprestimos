import { calculateCredits } from "../services/loanServices.js";

export const listCredits = (req, res) => {
  const credits = calculateCredits(req.body);
  res.json(credits);
};
