import { ResponseToolkit } from "@hapi/hapi";
import {
  createProject,
  getProject,
  getProjects,
} from "../controllers/projectController";
import { createStory, getStory } from "../controllers/storyController";
import { projectValidation } from "../validations/projectValidation";
const Joi = require("joi");
const projectRoutes = [
  {
    method: "POST",
    path: "/project",
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
  {
    method: "POST",
    path: "/story",
    handler: createStory,
  },
  {
    method: "GET",
    path: "/story",
    handler: getStory,
  },
];

module.exports = projectRoutes;
