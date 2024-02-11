import { useState } from "react";

function counter() {
  const [count, setCount] = useState(0);

  function handelIncrease() {
    console.log("Handel Increase function called");

    //Async Nature
    // setCount(count + 1);
    // console.log(count); //Delayed value will be displayed because react is using async state update

    //If you dont want to keep the delay then you can do it using variable.
    const nextCount = count + 1;
    setCount(nextCount);
    console.log(nextCount);
  }

  return (
    <div>
      <>
        <h1>Count: {count}</h1>
        <button onClick={handelIncrease}>Increase count</button>
      </>
    </div>
  );
}

export default counter;
