import { useState } from "react";

function ExampleUseStatePreservesData() {
  /* As we can see that we have 2 states. When we update any state using setState method (setCounter, setName) then the component will re-render. When we click the 'increase' button the counter value will increase to 'counter = 2' 
    Now after that if we click the 'update Name' button then name value will change to 'name = Jhala'. But it will not reset the value of counter to 'counter = 1' because useState preserves the value.Even if now we increase the counter then name value will not change back to 'name = kuldeep'.
    Even if the component is re-rendering then useState holds the its own state value.
  */
  const [counter, setCounter] = useState(1);
  const [name, setName] = useState("kuldeep");

  const increaseCounter = () => {
    setCounter((prevState) => (prevState = prevState + 1));
  };

  const updateName = () => {
    setName((prevState) => (prevState = "Jhala"));
  };

  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={increaseCounter}>Increase</button>
      <h1>{name}</h1>
      <button onClick={updateName}>Update Name</button>
    </div>
  );
}

export default ExampleUseStatePreservesData;
