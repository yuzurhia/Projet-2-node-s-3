import express from "express";
const router = express.Router();
import MeubleController from "../controllers/Meuble.js";
import MateriauxController from "../controllers/MateriauxController.js";
import CategorieController from "../controllers/CategorieController.js";
import UserController from "../controllers/UserController.js";

// Afficher la liste des meubles
router.get("/meuble", MeubleController.getAllMeuble);

// Afficher les détails d'un meuble spécifique
router.get("/meuble/:meubleId", MeubleController.getMeubleDetails);

// Créer un nouveau meuble
router.post("/meuble", MeubleController.createMeuble);

// Mettre à jour les détails d'un meuble
router.put("/meuble/:meubleId", MeubleController.updateMeuble);

// Supprimer un meuble
router.delete("/meuble/:meubleId", MeubleController.deleteMeuble);
// ---------------------------------------------------------------------------------------
// Afficher la liste des matériaux
router.get("/materiaux", MateriauxController.getAllMateriaux);

// Afficher les détails d'un matériau spécifique
router.get("/materiaux/:materiauxId", MateriauxController.getMateriauxDetails);

// Créer un nouveau matériau
router.post("/materiaux", MateriauxController.createMateriaux);

// Mettre à jour les détails d'un matériau
router.put("/materiaux/:materiauxId", MateriauxController.updateMateriaux);

// Supprimer un matériau
router.delete("/materiaux/:materiauxId", MateriauxController.deleteMateriaux);
// ---------------------------------------------------------------------------------------
// Afficher la liste des catégories
router.get("/categories", CategorieController.getAllCategories);

// Afficher les détails d'une catégorie spécifique
router.get(
  "/categories/:categorieSlug",
  CategorieController.getCategorieDetails
);

// Créer une nouvelle catégorie
router.post("/categories", CategorieController.createCategorie);

// Mettre à jour les détails d'une catégorie
router.put("/categories/:categorieId", CategorieController.updateCategorie);

// Supprimer une catégorie
router.delete("/categories/:categorieId", CategorieController.deleteCategorie);
// ---------------------------------------------------------------------------------------
// Inscription d'un utilisateur
router.post("/register", UserController.registerUser);

// Connexion d'un utilisateur
router.post("/login", UserController.loginUser);
export default router;
