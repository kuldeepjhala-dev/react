import React from "react";
import style from "./Greeting.module.css";

//In prop the handelClick is the function. In prop we can also pass a function. We are reciving handelClick function.
function Greeting({ handelClick }) {
  return (
    <div>
      {/* As onClick works on the htmlElement and 'h1' is an html element, so we use the onClick on the HTML element. And calling the function "handelClick" which is a prop. */}
      <h1 className={style.greeting} onClick={handelClick}>
        Kuldeepsinh Jhala
      </h1>
    </div>
  );
}

export default Greeting;
