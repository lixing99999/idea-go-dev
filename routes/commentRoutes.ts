import { ResponseToolkit } from "@hapi/hapi";
import {
  createComment,
  getAllComments,
  getProjectComments,
} from "../controllers/commentController";
const Joi = require("joi");
import { commentValidation } from "../validations/commentValidation";

const commentRoutes = [
  {
    method: "POST",
    path: "/project/{project_id}/comment",
    options: {
      validate: {
        payload: Joi.object(commentValidation),
        failAction: async (_request, _h: ResponseToolkit, err?: Error) => {
          throw err;
        },
      },
    },
    handler: createComment,
  },
  {
    method: "GET",
    path: "/project/{project_id}/comment",
    handler: getAllComments,
  },
];

module.exports = commentRoutes;
