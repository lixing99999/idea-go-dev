import { date, string } from "joi";

export const commentValidation = {
  my_comment: string(),
  created_by: string(),
};
