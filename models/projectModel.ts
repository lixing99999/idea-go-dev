import * as mongoose from "mongoose";
const { Schema } = mongoose;

const ProjectSchema = new Schema({
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

const ProjectModel = mongoose.model("Project", ProjectSchema);

export { ProjectSchema, ProjectModel };
