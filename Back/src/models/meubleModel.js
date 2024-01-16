import mongoose from "mongoose";
import { Schema } from "mongoose";

const MeubleSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  categories: [
    {
      type: Schema.Types.ObjectId,
      ref: "Categorie",
      required: true,
    },
  ],
  materials: [
    {
      type: Schema.Types.ObjectId,
      ref: "Material",
    },
  ],
});

export default mongoose.model("Meuble", MeubleSchema);
