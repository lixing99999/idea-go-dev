"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectModel = exports.ProjectSchema = void 0;
var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var ProjectSchema = new Schema({
    _id: Schema.Types.ObjectId,
    name: String,
    created_at: Date,
    created_by: String,
    comments: [
        {
            type: Schema.Types.ObjectId,
            ref: "Comment",
        },
    ],
});
exports.ProjectSchema = ProjectSchema;
var ProjectModel = mongoose.model("Project", ProjectSchema);
exports.ProjectModel = ProjectModel;
