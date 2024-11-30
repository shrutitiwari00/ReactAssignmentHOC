import React from "react";
import UpdatedComp from "./UpdatedComp";

const HoverComp = ({ count, incrementCount }) => {
  return (
    <div className="component-container">
      <h2 onMouseOver={incrementCount}>Hovered {count} Times</h2>
    </div>
  );
};

export default UpdatedComp(HoverComp);
