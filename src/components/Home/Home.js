import React from "react";
import { Link } from "react-router-dom";
import HomeRreviews from "../HomeRreviews/HomeRreviews";
import Comments from "../hooks/Comments";
import ProductDetails from "../ProductDetails/ProductDetails";
import "./Home.css";

const Home = () => {
  const [Reviw, setReviw] = Comments();
  const threecomments = Reviw.slice(0, 3);
  return (
    <div className="banner-container">
      <div>
        <ProductDetails></ProductDetails>
      </div>
      <h1 className="commettext">Whatever the customer thinks of us</h1>
      <div className="commetcontainer">
        {threecomments.map((threereviw) => (
          <HomeRreviews
            key={threereviw.id}
            threereviw={threereviw}
          ></HomeRreviews>
        ))}
      </div>
      <Link to="/REVIEWS" className="seeAllbutton">
        <button> See all customer thinks</button>
      </Link>
    </div>
  );
};

export default Home;
