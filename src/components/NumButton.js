import React from "react";

const NumButton = ({ title, num, sendRating }) => {
  return (
    <button className="ui button" onClick={() => sendRating(num)}>
      {num}
    </button>
  );
};

export default NumButton;
