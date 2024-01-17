import { useState } from "react";
import { v4 as uuid } from "uuid";
function StateExampleArray() {
  const [fruits, setFruits] = useState(["Apple", "Mango"]);

  const addFruit = () => {
    //setFruits(["newFruit"]); //It will remove previous array '["Apple", "Mango"]' and replace with '["newFruit"]'.
    //setFruits(fruits.push("New Fruit")); //You cannot do like this because it will generate the error. You cannot pass new state you need to pass the new Array when using Array in state.
    // setFruits([...fruits, "newFruit"]); //This will first 'spread-the-previous-array-fruits' in new Array and then add the 'new-fruit' in that array.
    setFruits((prevState) => [...prevState, "Banana"]);
  };

  return (
    <>
      <ul>
        {fruits.map((fruit) => (
          <li key={uuid()}>{fruit}</li>
        ))}
      </ul>
      <button onClick={addFruit}>Add Fruit</button>
    </>
  );
}

export default StateExampleArray;
