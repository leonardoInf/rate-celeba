import React from "react";
import NumButton from "./NumButton";

const Numpad = ({ getTitle, sendRating }) => {
  const title = getTitle();

  const renderContent = () => {
    const rows = [
      [7, 8, 9],
      [4, 5, 6],
      [1, 2, 3],
    ].map((row) => {
      return row.map((num, index) => {
        return (
          <div key={num} className="column" style={{ marginRight: "10px" }}>
            <NumButton
              num={num}
              title={title}
              sendRating={() => sendRating(num)}
            />
          </div>
        );
      });
    });

    return (
      <div className="ui relaxed grid">
        {[0, 1, 2].map((rowIndex) => {
          return (
            <div key={rowIndex} className="row">
              {rows[rowIndex]}
            </div>
          );
        })}
      </div>
    );
  };

  return renderContent();
};

export default Numpad;
