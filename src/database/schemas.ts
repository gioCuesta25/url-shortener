import mongoose from "mongoose";
const { Schema } = mongoose;

const ShrinkedUrl = new Schema(
  {
    original: { type: String, required: true },
    shrinkedId: { type: String, required: true },
  },
  { _id: false, versionKey: false }
);

export default mongoose.model("ShrinkedUrls", ShrinkedUrl);
