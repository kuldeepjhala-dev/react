import React from "react";
import ShowFullName from "./ShowFullName";

function ParentProps(prop) {
  // return <ShowFullName firstName={prop.firstName} lastName={prop.lastName} />;
  return <ShowFullName {...prop} />;
}

export default ParentProps;