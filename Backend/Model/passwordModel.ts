import { Schema, model } from "mongoose";
import { iPasswordData } from "../Utils/Interfaces";

const passwordModel = new Schema<iPasswordData>({
  password: String,
});
export default model<iPasswordData>("passwords", passwordModel);