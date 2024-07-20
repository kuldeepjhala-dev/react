import { useState } from "react";

function App() {
  const [checkboxstate, setCheckboxState] = useState("male");
  return (
    <div className="App">
      <h1>Radio Buttons</h1>
      <form>
        <label htmlFor="male">Male: </label>
        <input
          type="checkbox"
          id="male"
          checked={checkboxstate === "male"}
          onChange={(e) => {
            setCheckboxState("male");
          }}
        />

        <label htmlFor="female">Female: </label>
        <input
          type="checkbox"
          id="female"
          checked={checkboxstate === "female"}
          onChange={(e) => {
            setCheckboxState("female");
          }}
        />

        <label htmlFor="other">Other: </label>
        <input
          type="checkbox"
          id="other"
          checked={checkboxstate === "other"}
          onChange={(e) => {
            setCheckboxState("other");
          }}
        />
      </form>
    </div>
  );
}

export default App;
