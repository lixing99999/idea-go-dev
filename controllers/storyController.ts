import { ResponseObject, ResponseToolkit, Request } from "@hapi/hapi";

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const personSchema = Schema({
  _id: Schema.Types.ObjectId,
  name: String,
  age: Number,
  stories: [{ type: Schema.Types.ObjectId, ref: "Story" }],
});

const storySchema = Schema({
  author: { type: Schema.Types.ObjectId, ref: "Person" },
  title: String,
  fans: [{ type: Schema.Types.ObjectId, ref: "Person" }],
});

const Story = mongoose.model("Story", storySchema);
const Person = mongoose.model("Person", personSchema);

export const createStory = async (
  { payload }: Request,
  h: ResponseToolkit
): Promise<ResponseObject> => {
  try {
    const author = new Person({
      _id: new mongoose.Types.ObjectId(),
      name: "Ian Fleming",
      age: 50,
    });

    author.save(function (err) {
      if (err) return console.log(err);

      const story1 = new Story({
        title: "Casino Royale",
        author: author._id, // assign the _id from the person
      });

      story1.save(function (err) {
        if (err) return console.log(err);
        // that's it!
      });
    });

    return h.response(author).code(200);
  } catch (err) {
    console.log(err);
  }
};

export const getStory = async (
  { payload }: Request,
  h: ResponseToolkit
): Promise<ResponseObject> => {
  try {
    const result = await Person.populate("stories").exec();
    return h.response(result).code(200);
  } catch (err) {
    console.log(err);
  }
};
