import './App.css';
import { useState } from "react";

function App() {
  const [gender, setGender] = useState("male");
  return (
    <div className="App">
      <h1>Radio Button</h1>
      <label htmlFor="male">Male</label>
      <input type="radio" checked={gender === "male"} onChange={() => {
        setGender("male");
      }} />
      <br />
      <label htmlFor="female">Female</label>
      <input type="radio" checked={gender === "female"} onChange={() => {
        setGender("female");
      }} />
      <br />
      <label htmlFor="female">others</label>
      <input type="radio" checked={gender === "others"} onChange={() => {
        setGender("others");
      }} />
    </div>
  );
}

export default App;
