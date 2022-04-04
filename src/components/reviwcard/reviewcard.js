import React from "react";
const Reviewcard = ({ Reviw }) => {
  const { rating, text, user, userImage } = Reviw;
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

export default Reviewcard;
