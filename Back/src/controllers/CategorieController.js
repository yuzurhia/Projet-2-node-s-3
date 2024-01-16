import Categorie from "../models/categorieModel.js";

const getAllCategories = async (req, res) => {
  try {
    const categorieList = await Categorie.find();
    res.json({ categorieList });
  } catch (err) {
    console.error("Erreur lors de la récupération des catégories :", err);
    res.status(500).json({ error: "Erreur serveur" });
  }
};

const getCategorieDetails = async (req, res) => {
  const { categorieSlug } = req.params;
  try {
    const categorie = await Categorie.findOne({ slug: categorieSlug });
    if (!categorie) {
      return res.status(404).json({ error: "Catégorie non trouvée" });
    }
    res.json({ categorie });
  } catch (err) {
    console.error(
      "Erreur lors de la récupération des détails de la catégorie :",
      err
    );
    res.status(500).json({ error: "Erreur serveur" });
  }
};

const createCategorie = async (req, res) => {
  const { name } = req.body;
  const newCategorie = new Categorie({ name });

  try {
    await newCategorie.save();
    res.status(201).json({ newCategorie });
  } catch (err) {
    console.error("Erreur lors de la création de la catégorie :", err);
    res.status(500).json({ error: "Erreur serveur" });
  }
};

const updateCategorie = async (req, res) => {
  const { categorieId } = req.params;
  const { name } = req.body;

  try {
    const updatedCategorie = await Categorie.findByIdAndUpdate(
      categorieId,
      { name },
      { new: true }
    );

    if (!updatedCategorie) {
      return res.status(404).json({ error: "Catégorie non trouvée" });
    }

    res.json({ updatedCategorie });
  } catch (err) {
    console.error("Erreur lors de la mise à jour de la catégorie :", err);
    res.status(500).json({ error: "Erreur serveur" });
  }
};

const deleteCategorie = async (req, res) => {
  const { categorieId } = req.params;

  try {
    const deletedCategorie = await Categorie.findByIdAndDelete(categorieId);

    if (!deletedCategorie) {
      return res.status(404).json({ error: "Catégorie non trouvée" });
    }

    res.json({ message: "Catégorie supprimée avec succès" });
  } catch (err) {
    console.error("Erreur lors de la suppression de la catégorie :", err);
    res.status(500).json({ error: "Erreur serveur" });
  }
};

export default {
  getAllCategories,
  getCategorieDetails,
  createCategorie,
  updateCategorie,
  deleteCategorie,
};
