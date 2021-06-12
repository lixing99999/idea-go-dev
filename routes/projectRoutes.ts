import { ResponseToolkit } from "@hapi/hapi";
import {
  createProject,
  getProject,
  getProjects,
} from "../controllers/projectController";
import { projectValidation } from "../validations/projectValidation";
const Joi = require("joi");
const projectRoutes = [
  {
    method: "POST",
    path: "/project",
    options: {
      validate: {
        payload: Joi.object(projectValidation),
        failAction: async (_request, _h: ResponseToolkit, err?: Error) => {
          throw err;
        },
      },
    },
    handler: createProject,
  },
  {
    method: "GET",
    path: "/project",
    handler: getProjects,
  },
  {
    method: "GET",
    path: "/project/{project_id}",
    handler: getProject,
  },
];

module.exports = projectRoutes;
