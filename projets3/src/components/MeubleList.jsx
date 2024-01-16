// MeubleList.js
import React from "react";
import cardProduct from "./cardProduct";

const MeubleList = ({ MeubleList }) => {
  return (
    <div className="container mt-4">
      <h1>Tous les meubles</h1>
      <ul>
        hello
        {MeubleList}
        <cardProduct name="toto" description="tata" />
      </ul>
      {/* <ul>
        {MeubleList.map((Meuble) => (
          <li key={Meuble._id}>
            {Meuble.name} - {Meuble.materiaux}
          </li>
        ))}
      </ul> */}
    </div>
  );
};

export default MeubleList;
