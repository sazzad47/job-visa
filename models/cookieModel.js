import mongoose from "mongoose";
const AutoIncrement = require("mongoose-sequence")(mongoose);
const cookieSchema = new mongoose.Schema(
  {
    index: Number,
    title: String,
    shortDescription: String,
    body: String,
    dateOfPost: Date,
  },
  {
    timestamps: true,
  }
);

if (!mongoose.models.cookie) {
  cookieSchema.plugin(AutoIncrement, {
    id: "cookieCounter",
    inc_field: "index",
  });
}

let Dataset = mongoose.models.cookie || mongoose.model("cookie", cookieSchema);
export default Dataset;
