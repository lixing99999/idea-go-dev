import * as Mongoose from "mongoose";
import { ProjectModel } from "../models/projectModel";
const { expect } = require("chai");

describe("company", () => {
  before(function () {
    Mongoose.connect(process.env.DB_URL, {
      useNewUrlParser: true,
    });
  });

  after(function () {
    Mongoose.connection.close();
  });

  it("should create a project", async () => {
    const company = new ProjectModel({
      name: "Food Sharing Platform",
    });
    const result = await company.save();
    console.log(result);
    expect(result).to.have.property("_id");
  });
});
