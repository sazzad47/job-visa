import mongoose from "mongoose";
const AutoIncrement = require("mongoose-sequence")(mongoose);
const legalNoticeSchema = new mongoose.Schema(
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

if (!mongoose.models.legalNotice) {
  legalNoticeSchema.plugin(AutoIncrement, {
    id: "legalNoticeCounter",
    inc_field: "index",
  });
}

let Dataset =
  mongoose.models.legalNotice ||
  mongoose.model("legalNotice", legalNoticeSchema);
export default Dataset;
