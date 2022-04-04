import React from "react";
import "./HomeRreviews.css";

const HomeRreviews = ({ threereviw }) => {
  const { rating, text, user, userImage } = threereviw;
  return (
    <div className="HomeRreviews">
      <img src={userImage} alt="" />
      <h1>{user}</h1>
      <p>{text}</p>
      <small>
        <strong>{rating}</strong>
      </small>
    </div>
  );
};

export default HomeRreviews;
