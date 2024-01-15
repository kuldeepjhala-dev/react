import React from "react";

function Greeting2(props) {
  // function Greeting2({children, firstName, lastName}) {

  return (
    <>
      {props.children}
      <h1>
        {props.firstName} {props.lastName}
      </h1>
    </>
  );
}

export default Greeting2;
