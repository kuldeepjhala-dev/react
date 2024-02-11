import { useState } from "react";
import "./App.css";
import UserForms from "./components/UserForms";

function App() {
  console.log("App component rendered");
  const [count, setCount] = useState(0);

  return (
    <>
      <UserForms />
    </>
  );
}

export default App;
