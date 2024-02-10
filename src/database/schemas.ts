import mongoose from "mongoose";
const { Schema } = mongoose;

const ShrinkedUrl = new Schema(
  {
    original: { type: String, required: true },
    shrinkedId: { type: String, required: true },
  },
  { versionKey: false }
);

export const ShrinkedUrlModel = mongoose.model("ShrinkedUrls", ShrinkedUrl);
