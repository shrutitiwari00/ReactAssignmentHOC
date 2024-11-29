import React from "react";
import UpdatedComp from "./UpdatedComp";

const HoverComp = ({ count, incrementCount }) => {
  console.log(incrementCount);
  return <h2 onMouseOver={incrementCount}> Hovered {count} Times </h2>;
};

export default UpdatedComp(HoverComp);