import React from "react";

function Greeting2(props) {
  // function Greeting2({children, firstName, lastName}) {

  return (
    <>
      {/*the children-prop is all the elements which are written in opening and closing tag in App.jsx*/}
      {props.children}
      <h1>
        {/* With children-prop we can also pass simple props*/}
        {props.firstName} {props.lastName}
      </h1>
    </>
  );
}

export default Greeting2;
