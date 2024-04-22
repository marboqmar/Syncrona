import React from "react";

const BoardCard = () => {
  return (
    <div className="display__flex__between align__items__center">
      <div className="List__Card shadow__effect">
        <input
          type="text"
          placeholder="Type something"
          className="input width__border__box"
          style={{ width: "100%" }}
        />
      </div>
      ¡
    </div>
  );
};

export default BoardCard;
