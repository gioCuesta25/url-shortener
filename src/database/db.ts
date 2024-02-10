import mongoose from "mongoose";
import { DB_NAME, MONGO_PASSWORD, MONGO_USER } from "config/environment";

export const connectDb = async () => {
  const URI = `mongodb+srv://${MONGO_USER}:${MONGO_PASSWORD}@${DB_NAME}.eb7c5g6.mongodb.net/?retryWrites=true&w=majority`;
  try {
    await mongoose.connect(URI);
    console.log("connected to mongodb");
  } catch (error) {
    console.log("error connectig db: ", error);
  }
};
