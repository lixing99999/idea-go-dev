"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentModel = exports.CommentSchema = void 0;
var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var CommentSchema = new Schema({
    _id: Schema.Types.ObjectId,
    project_id: {
        type: Schema.Types.ObjectId,
        ref: "Project",
    },
    my_comment: String,
    created_at: Date,
    created_by: String,
});
exports.CommentSchema = CommentSchema;
var CommentModel = mongoose.model("Comment", CommentSchema);
exports.CommentModel = CommentModel;
