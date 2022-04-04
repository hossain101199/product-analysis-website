import React from "react";
import "./ProductDetails.css";

const ProductDetails = () => {
  const data = {
    id: "012",
    index: 11,
    price: "$2,542.72",
    picture: "./data-images//porcini-mushroom-12.jpg",
    name: "Porcinis Mushroom",
    about:
      "Characteristics: Slightly reddish-brown in color, porcini are one of the most prized wild mushrooms, sought out for their smooth texture and aromatic, woodsy flavor. They're popular in Italy, as well as in France, where they're called cèpes. Fresh porcinis aren't as easy to locate in the United States, but dried ones are easily reconstituted by soaking in hot water. Prized in Italy, these have a brief summer season in the East and pop up in the spring and fall on the West Coast.",
  };
  return (
    <div className="banner">
      <div className="banner-left">
        <div>
          <h1>{data.name}</h1>
          <p>{data.about}</p>
          <button>See more</button>
        </div>
      </div>
      <div className="banner-right">
        <img src={data.picture} alt="" />
      </div>
    </div>
  );
};

export default ProductDetails;
