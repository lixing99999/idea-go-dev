import * as mongoose from "mongoose";
const { Schema } = mongoose;

const CommentSchema = new Schema({
  _id: Schema.Types.ObjectId,
  project_id: {
    type: Schema.Types.ObjectId,
    ref: "Project",
  },
  my_comment: String,
  created_at: Date,
  created_by: String,
});

const CommentModel = mongoose.model("Comment", CommentSchema);

export { CommentSchema, CommentModel };
