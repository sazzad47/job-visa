import mongoose from "mongoose";
const AutoIncrement = require("mongoose-sequence")(mongoose);
const accessibilityStatementSchema = new mongoose.Schema(
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

if (!mongoose.models.accessibilityStatement) {
  accessibilityStatementSchema.plugin(AutoIncrement, {
    id: "accessibilityStatementCounter",
    inc_field: "index",
  });
}

let Dataset =
  mongoose.models.accessibilityStatement ||
  mongoose.model("accessibilityStatement", accessibilityStatementSchema);
export default Dataset;
