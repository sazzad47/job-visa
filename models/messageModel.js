import mongoose from "mongoose";
const AutoIncrement = require("mongoose-sequence")(mongoose);
const messageSchema = new mongoose.Schema(
  {
    index: Number,
    name: String,
    phone: String,
    email: String,
    message: String,
    done: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);
if (!mongoose.models.message) {
  messageSchema.plugin(AutoIncrement, {
    id: "messageCounter",
    inc_field: "index",
  });
}

let Dataset =
  mongoose.models.message || mongoose.model("message", messageSchema);
export default Dataset;
