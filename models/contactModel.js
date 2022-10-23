import mongoose from "mongoose";
const AutoIncrement = require("mongoose-sequence")(mongoose);
const contactSchema = new mongoose.Schema(
  {
    index: Number,
    address: String,
    phone: String,
    email: String,
  },
  {
    timestamps: true,
  }
);
if (!mongoose.models.contact) {
  contactSchema.plugin(AutoIncrement, {
    id: "contactCounter",
    inc_field: "index",
  });
}

let Dataset =
  mongoose.models.contact || mongoose.model("contact", contactSchema);
export default Dataset;
