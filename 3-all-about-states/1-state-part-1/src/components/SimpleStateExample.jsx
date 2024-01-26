import { useState } from "react";

//hooks :
//useState Hook; State means data or current state of the data.
//useEffect Hoook; It is also used.

//In react we cannot use normal variables to change the UI.

//State ---> (contains) ---> Data
//State ---> (changes) --> (our UI component will again render) --> (and our ui will change) ---> Data (changes)
//If you want to keep the UI dynamic then you need to store it in the state.

//useState
//It is a hook. It is called like a function. 'useState()'.
//You can only call the useState inside the component only. Here it is App() component. You can only call it inside App component.
//All hooks are called inside component. It directParent has to be a component.
//As a input useState() will take default value. 'useState(defaultValue)'
//It will return an array. Array contains two things. useState(defaultValue) ---> (returns) ---> Array ---> (contains-2-things) ---> [stateValue, functionToUpdateThatStateValue]
//1. stateValue
//2. functionToUpdateThatStateValue

function SimpleStateExample() {
  console.log("Component rendered");

  // let firstName = "John";
  // function handelNameChange() {
  //   firstName = "kuldeep"; //Here we are trying to update the firstName. Value of firstName is chnaged but in UI(on screen), it will not change.
  //   console.log(firstName); // op : Kuldeep
  // }

  // const returnedValue = useState("defaultKuldeep"); //state is created..
  // console.log(returnedValue); //op : Array[2]. (stateValue, functionToUpdateThatStateValue)
  //When the state it created it will return two things in array[stateValue, functionToUpdateThatStateValue]. Below we are extracting the values from array and storing it in variables for usage.
  // const firstName = returnedValue[0];
  // const functionToUpdateFirstName = returnedValue[1];
  // function handelNameChange() {
  //   // functionToUpdateFirstName("updatedJhala");
  // }

  // const [firstName, setFirstName] = useState("default - Kuldeep");
  // function handelNameChange() {
  //   setFirstName("updated - Kuldeep Jhala")
  // }

  //Toggling the names
  const [firstName, setFirstName] = useState("Kuldeep");
  function handelNameChange() {
    if (firstName === "Kuldeep") {
      setFirstName("Jhala");
    } else {
      setFirstName("Kuldeep");
    }
  }

  return (
    <div>
      {/* <h1>{firstName}</h1> */}
      {/* <button onClick={handelNameChange}>Change Name</button> */}
      {/* Even clicking on button will not chnage the name of the button. So now we will use state */}

      {/* <h1>{firstName}</h1>
      <button onClick={handelNameChange}>Change the Name</button> */}
      {/* 
      1. on clicking the button handelNameChange function is called. 
      2. Which will further call the --> functionToUpdateFirstName(). 
      3. functionToUpdateFirstName() will change the state ---> (updates defaultValue) ---> 'updatedJhala'
      4. BEFORE : state ---> (contains defaultValue) ---> 'defaultKuldeep' 
      5. AFTER : state ---> (updates defaultValue) ---> 'updatedJhala'
      6. As the state chnages the component will rerender and it will update the UI with nre Data.
      */}

      {/* 
      <h1>{firstName}</h1>
      <button onClick={handelNameChange}>Change the Name</button> 
      */}

      <h1>{firstName}</h1>
      <button onClick={handelNameChange}>Change the Name</button>
    </div>
  );
}

export default SimpleStateExample;
