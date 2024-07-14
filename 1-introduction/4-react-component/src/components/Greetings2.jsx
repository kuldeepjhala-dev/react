import React from "react";
import "./Greeting.css"; //importing css file to use it

function Greetings2() {
  const isSansSerif = true;
  const isDarkMode = true;
  //You can only use camel case in cssStyles object, you cannnot use - (hypen)
  const cssStyles = {
    backgroundColor: "lightblue",
    fontFamily: "sans-serif",
    margin: "1rem",
    padding: "1rem",
  };
  return (
    //Internal CSS
    <div style={cssStyles}>
      {/* Below is example of inline css*/}
      <h1
        style={{
          backgroundColor: "red",
          fontFamily: isSansSerif ? "sans-serif" : "sarif",
        }}
      >
        Kuldeep
      </h1>
      {/* Below is example of External css*/}
      {/* <p className={isDarkMode && "bg-dark"}> */} {/* Condition class */}
      {/* Below is Condition class and normal class togethere */}
      {/* <p className={`container ${isDarkMode && "bg-dark"}`}> */}  
      <p className={`container ${isDarkMode ? "bg-dark" : ""}`}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis,
        dolore?
      </p>
    </div>
  );
}
export default Greetings2;
