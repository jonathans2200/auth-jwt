import { Schema, model } from "mongoose";

const materiaSchema = new Schema(
  {
    nombre: String,
    grupo: String,
  },
  {
    timestamps: true,
  }
);

export default model("materia", materiaSchema);
