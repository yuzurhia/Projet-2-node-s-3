import Meuble from "../models/meubleModel.js";

const getAllMeuble = async (req, res) => {
  try {
    const MeubleList = await Meuble.find();
    res.json({ MeubleList });
  } catch (err) {
    console.error("Erreur lors de la récupération des meubles :", err);
    res.status(500).json({ error: "Erreur serveur" });
  }
};

const getMeubleDetails = async (req, res) => {
  const { MeubleId } = req.params;
  try {
    const Meuble = await Meuble.findById(MeubleId);
    if (!Meuble) {
      return res.status(404).json({ error: "Meuble non trouvé" });
    }
    res.json({ Meuble });
  } catch (err) {
    console.error(
      "Erreur lors de la récupération des détails du meuble :",
      err
    );
    res.status(500).json({ error: "Erreur serveur" });
  }
};

const createMeuble = async (req, res) => {
  const { name, category, materials } = req.body;

  const newMeuble = new Meuble({ name, category, materials });

  try {
    await newMeuble.save();
    res.status(201).json({ newMeuble });
  } catch (err) {
    console.error("Erreur lors de la création du meuble :", err);
    res.status(500).json({ error: "Erreur serveur" });
  }
};

const updateMeuble = async (req, res) => {
  const { MeubleId } = req.params;
  const { name, category, materials } = req.body;

  try {
    const updatedMeuble = await Meuble.findByIdAndUpdate(
      MeubleId,
      { name, category, materials },
      { new: true }
    );

    if (!updatedMeuble) {
      return res.status(404).json({ error: "Meuble non trouvé" });
    }

    res.json({ updatedMeuble });
  } catch (err) {
    console.error("Erreur lors de la mise à jour du meuble :", err);
    res.status(500).json({ error: "Erreur serveur" });
  }
};

const deleteMeuble = async (req, res) => {
  const { MeubleId } = req.params;

  try {
    const deletedMeuble = await Meuble.findByIdAndDelete(MeubleId);

    if (!deletedMeuble) {
      return res.status(404).json({ error: "Meuble non trouvé" });
    }

    res.json({ message: "Meuble supprimé avec succès" });
  } catch (err) {
    console.error("Erreur lors de la suppression du meuble :", err);
    res.status(500).json({ error: "Erreur serveur" });
  }
};

export default {
  getAllMeuble,
  getMeubleDetails,
  createMeuble,
  updateMeuble,
  deleteMeuble,
};
