import { useState } from "react";

function Counter() {
  let [countValue, setCountValue] = useState(0);

  //   function increaseCounter() {
  //     countValue++;
  //     setCountValue(countValue);
  //     //   passing callback function in setState method.
  //     setCountValue((previousState) => previousState++);
  //   }

  function decreaseCounter() {
    // Below we are diretly updating the state value in setState method.y
    // setCountValue(countValue--);
    //passing callback function in setState method.
    //In this callback function we can accpet as a parameter a 'previousState or currentState'. It will be the state data itself.
    setCountValue((previousState) => {
      return previousState - 1;
    });
  }

  //   function resetCounter() {
  //     countValue = 0;
  //     setCountValue(countValue);
  //   }

  return (
    <>
      <h1>{countValue}</h1>
      <button onClick={(increaseCounter) => setCountValue(countValue++)}>
        Increase
      </button>
      <button onClick={decreaseCounter}>Decrease</button>
      <button
        onClick={() => {
          setCountValue(0);
        }}
      >
        Reset
      </button>
    </>
  );
}
export default Counter;
