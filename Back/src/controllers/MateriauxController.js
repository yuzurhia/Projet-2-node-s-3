import Materiaux from "../models/materiauxModel.js";

const getAllMateriaux = async (req, res) => {
  try {
    const MateriauxList = await Materiaux.find();
    res.json({ MateriauxList });
  } catch (err) {
    console.error("Erreur lors de la récupération des matériaux :", err);
    res.status(500).json({ error: "Erreur serveur" });
  }
};

const getMateriauxDetails = async (req, res) => {
  const { MateriauxId } = req.params;
  try {
    const Materiaux = await Materiaux.findById(MateriauxId);
    if (!Materiaux) {
      return res.status(404).json({ error: "Matériau non trouvé" });
    }
    res.json({ Materiaux });
  } catch (err) {
    console.error(
      "Erreur lors de la récupération des détails du matériau :",
      err
    );
    res.status(500).json({ error: "Erreur serveur" });
  }
};

const createMateriaux = async (req, res) => {
  const { name, type, supplyingCompany } = req.body;

  const newMateriaux = new Materiaux({ name, type, supplyingCompany });

  try {
    await newMateriaux.save();
    res.status(201).json({ newMateriaux });
  } catch (err) {
    console.error("Erreur lors de la création du matériau :", err);
    res.status(500).json({ error: "Erreur serveur" });
  }
};

const updateMateriaux = async (req, res) => {
  const { MateriauxId } = req.params;
  const { name, type, supplyingCompany } = req.body;

  try {
    const updatedMateriaux = await Materiaux.findByIdAndUpdate(
      MateriauxId,
      { name, type, supplyingCompany },
      { new: true }
    );

    if (!updatedMateriaux) {
      return res.status(404).json({ error: "Matériau non trouvé" });
    }

    res.json({ updatedMateriaux });
  } catch (err) {
    console.error("Erreur lors de la mise à jour du matériau :", err);
    res.status(500).json({ error: "Erreur serveur" });
  }
};

const deleteMateriaux = async (req, res) => {
  const { MateriauxId } = req.params;

  try {
    const deletedMateriaux = await Materiaux.findByIdAndDelete(MateriauxId);

    if (!deletedMateriaux) {
      return res.status(404).json({ error: "Matériau non trouvé" });
    }

    res.json({ message: "Matériau supprimé avec succès" });
  } catch (err) {
    console.error("Erreur lors de la suppression du matériau :", err);
    res.status(500).json({ error: "Erreur serveur" });
  }
};

export default {
  getAllMateriaux,
  getMateriauxDetails,
  createMateriaux,
  updateMateriaux,
  deleteMateriaux,
};
