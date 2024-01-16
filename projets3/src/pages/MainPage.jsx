import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import MeubleList from "../components/MeubleList";

const MainPage = () => {
  const [meubles, setMeubles] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch(process.env.APIURL + "api/Meuble")
      .then((response) => response.json())
      .then((data) => {
        setMeubles(data);
        const uniqueCategories = [
          ...new Set(data.map((materiaux) => materiaux.category)),
        ];
        setCategories(uniqueCategories);
      })
      .catch((error) =>
        console.error("Erreur lors de la récupération des meubles", error)
      );
  }, []);

  return (
    <div>
      <MeubleList meubles={meubles} />
    </div>
  );
};

export default MainPage;
