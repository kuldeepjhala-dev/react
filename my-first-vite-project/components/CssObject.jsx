import React from "react";

function CssObject() {
  //css style object
  const cssStyles = {
    backgroundColor: "blue",
    fontFamily: "sans-serif",
    color: "white",
    margin: "1rem",
    padding: "1rem",
  };

  return (
    //css using object
    <div style={cssStyles}>
      <h1>Kuldeep</h1>
      <p
        style={{
          //inline css
          backgroundColor: "black",
          fontFamily: "sans-serif-light",
          color: "white",
          margin: "1rem",
          padding: "1rem",
        }}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate,
        earum!
      </p>
    </div>
  );
}

export default CssObject;
