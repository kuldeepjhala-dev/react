import React from "react";
import "./Greeting.css";
import style from "./Greeting.module.css";

function Greeting() {
  const kname = "Kuldeepsinh Jhala";

  // Below are different ways to express the function.

  const firstName = (name) => name.toUpperCase();

  //   function firstName(name) {
  //     return name.toUpperCase();
  //   }

  //   const firstName = function (name) {
  //     return name.toUpperCase();
  //   };

  // const firstName = (name) => {
  //   return name.toUpperCase();
  // };

  return (
    <div className={style.container}>
      //here style is applied. Remember to add it inside curly brackets
      <h1>Hello {firstName(kname)}</h1>
      //you can also access it using bracket notation
      <p className={style["bg-yellow"]}>
        kj Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor magni
        facere adipisci, nihil quas vel?
      </p>

      <h1 className={`${style.container} ${style["bg-yellow"]}`}>
        when you want to apply multiple css classes
      </h1>
    </div>

    
  );
}

export default Greeting;
