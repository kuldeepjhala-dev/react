import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
const root = ReactDOM.createRoot(document.getElementById("root"));

// This is also a component
// function Hiii() {
//   return (
//     <>
//       <h1>Hello 1</h1>
//       <p>hey</p>
//     </>
//   );
// }

root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);
