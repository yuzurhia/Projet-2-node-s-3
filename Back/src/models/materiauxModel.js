import mongoose from "mongoose";

const materialSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    enum: ["Bois", "Fer", "Plastique"],
    required: true,
  },
  supplyingCompany: {
    type: String,
    required: true,
  },
});

export default mongoose.model("Materiaux", materialSchema);
