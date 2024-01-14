import React from "react";
import style from "./Greeting.module.css";
import style2 from "./Greeting2.module.css";

//CSS odules avoid name colission as above both classes contains same name properties but we can access them using their object uniquely
function Greeting3() {
  return (
    <div>
      {/* <h1 className={style2.container}>Hello</h1> */}
      {/* <h1 className={style["bg-dark"]}>Hello</h1> */}
      <h1 className={`${style2.container} ${style["bg-dark"]}`}>Hello</h1>
    </div>
  );
}

export default Greeting3;
