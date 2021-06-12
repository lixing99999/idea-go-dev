import { ResponseObject, ResponseToolkit, Request } from "@hapi/hapi";
import { exec } from "child_process";
const mongoose = require("mongoose");
import { CommentModel } from "../models/commentModel";
import { ProjectModel } from "../models/projectModel";
const moment = require("moment");

export const createProject = async (
  { payload }: Request,
  h: ResponseToolkit
): Promise<ResponseObject> => {
  const project = await new ProjectModel(
    Object.assign(payload, {
      _id: new mongoose.Types.ObjectId(),
      created_at: moment(),
    })
  ).save();

  return h.response(project).code(200);
};

export const getProjects = async (
  { payload }: Request,
  h: ResponseToolkit
): Promise<ResponseObject> => {
  const companies = await ProjectModel.find().populate("comments").exec();

  return h.response(companies).code(200);
};

export const getProject = async (
  { payload, params }: Request,
  h: ResponseToolkit
): Promise<ResponseObject> => {
  const companies = await ProjectModel.findOne({
    _id: params["project_id"],
  }).exec();

  const comment = await companies.populate("comments").execPopulate();

  return h.response(companies).code(200);
};
