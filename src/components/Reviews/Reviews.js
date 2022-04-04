import React from "react";
import Comments from "../hooks/Comments";
import Reviewcard from "../reviwcard/reviewcard";

const Reviews = () => {
  const [Reviw, setReviw] = Comments();
  return (
    <div className="commetcontainer">
      {Reviw.map((Reviw) => (
        <Reviewcard Reviw={Reviw}></Reviewcard>
      ))}
    </div>
  );
};

export default Reviews;
