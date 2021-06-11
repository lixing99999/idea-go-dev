import { ResponseObject, ResponseToolkit, Request } from "@hapi/hapi";
import { Socket } from "dgram";
import { CommentModel, CommentSchema } from "../models/commentModel";
import { ProjectModel } from "../models/projectModel";
const mongoose = require("mongoose");

export const createComment = async (
  { payload, params }: Request,
  h: ResponseToolkit
): Promise<ResponseObject> => {
  const project = await ProjectModel.findOne({
    _id: params["project_id"],
  }).exec();

  const comment = new CommentModel(
    Object.assign(payload, { _id: new mongoose.Types.ObjectId() })
  );
  const c_result = await comment.save();
  project["comments"].push(c_result);
  const result = await project.save();

  global["io"].emit("updated-comment", "updated comment");

  return h.response(result).code(200);
};

export const getProjectComments = async (
  { params }: Request,
  h: ResponseToolkit
): Promise<ResponseObject> => {
  const comments = await CommentModel.find({
    project_id: params["project_id"],
  }).exec();

  return h.response(comments).code(200);
};

export const getAllComments = async (
  { params }: Request,
  h: ResponseToolkit
): Promise<ResponseObject> => {
  const comments = await CommentModel.find().exec();

  return h.response(comments).code(200);
};
