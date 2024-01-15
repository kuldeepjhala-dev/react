import React from "react";
import ShowFullName from "./ShowFullName";

function ParentProps(prop) {
  // return <ShowFullName firstName={prop.firstName} lastName={prop.lastName} />;
  return <ShowFullName {...prop} />;
  {
    /* The above component is returning all props to the child component. It is using spread operator */
  }
}

export default ParentProps;
