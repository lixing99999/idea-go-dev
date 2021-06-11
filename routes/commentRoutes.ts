import { ResponseToolkit } from "@hapi/hapi";
import {
  createComment,
  getAllComments,
  getProjectComments,
} from "../controllers/commentController";
import { createProject } from "../controllers/projectController";
import { projectValidation } from "../validations/projectValidation";
const Joi = require("joi");
const commentRoutes = [
  {
    method: "POST",
    path: "/project/{project_id}/comment",
    handler: createComment,
  },
  {
    method: "GET",
    path: "/project/{project_id}/comment",
    handler: getAllComments,
  },
];

module.exports = commentRoutes;
