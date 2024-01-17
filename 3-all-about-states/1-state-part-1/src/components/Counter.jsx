import { useState } from "react";

function Counter() {
  let [countValue, setCountValue] = useState(0);

  //   function increaseCounter() {
  //     countValue++;
  //     setCountValue(countValue);
  //   }

  function decreaseCounter() {
    countValue--;
    setCountValue(countValue);
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
