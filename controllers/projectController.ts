import { ResponseObject, ResponseToolkit, Request } from "@hapi/hapi";
import { exec } from "child_process";
const mongoose = require("mongoose");
import { CommentModel } from "../models/commentModel";
import { ProjectModel } from "../models/projectModel";

export const createProject = async (
  { payload }: Request,
  h: ResponseToolkit
): Promise<ResponseObject> => {
  try {
    const project = await new ProjectModel(
      Object.assign(payload, { _id: new mongoose.Types.ObjectId() })
    ).save();

    const comment = await new CommentModel({
      _id: new mongoose.Types.ObjectId(),
      my_comment: "my first comment",
      created_by: "lixing",
      project_id: project._id,
    }).save();

    console.log(comment);

    return h.response(project).code(200);
  } catch (err) {
    console.log(err);
  }
};

export const getProjects = async (
  { payload }: Request,
  h: ResponseToolkit
): Promise<ResponseObject> => {
  try {
    const companies = await ProjectModel.find().populate("comments").exec();

    return h.response(companies).code(200);
  } catch (err) {
    console.log(err);
  }
};

export const getProject = async (
  { payload, params }: Request,
  h: ResponseToolkit
): Promise<ResponseObject> => {
  try {
    const companies = await ProjectModel.findOne({
      _id: params["project_id"],
    }).exec();

    const comment = await companies.populate("comments").execPopulate();
    console.log("comment", comment);

    return h.response(companies).code(200);
  } catch (err) {
    console.log(err);
  }
};
