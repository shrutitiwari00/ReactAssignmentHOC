import React from "react";
import UpdatedComp from "./UpdatedComp";

const ClickCounter = ({ count, incrementCount }) => {
  return (
    <div className="component-container">
      <button onClick={incrementCount}>Count {count} Times</button>
    </div>
  );
};

export default UpdatedComp(ClickCounter);
