import { date, string } from "joi";

export const projectValidation = {
  name: string(),
  created_by: string(),
};
