import React from "react"; //Previously you need to import this but after new versio//n you dont need to do that.
import HelloWorld from "/components/HelloWorld";
import Default_HelloWorld from "/components/HelloWorld"; //you can give any name while "export is default".
import Default_HelloWorld1 from "/components/HelloWorld1";
import { HelloWorld2 } from "/components/HelloWorld1"; //when one .jsx file has more then one component then you need to export it inside the brackets{} and you cannot change the name of that component
import Greeting from "../components/Greeting";
import CssObject from "../components/CssObject";

function App() {
  return (
    <>
      {/* <HelloWorld />
      <Default_HelloWorld />
      <Default_HelloWorld1 />
      <HelloWorld2 /> */}
      <Greeting />
      {/* <CssObject/> */}
    </>
  );
}

export default App;
