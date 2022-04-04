const { useState, useEffect } = require("react");

const Comments = () => {
  const [Reviw, setReviw] = useState([]);
  useEffect(() => {
    fetch("comment.json")
      .then((res) => res.json())
      .then((data) => setReviw(data));
  }, []);
  return [Reviw, setReviw];
};
export default Comments;
