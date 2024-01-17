import Greeting from "./components/Greeting";

function App() {

  // when we click the button 'Click me', browser will call the function handelClick(). Then the browser will pass 'event-object' to the function => handelClick(e) where e is event object which is automatically passed by browser.
  //In the function parameter we will accept the e => which is event object passed by browser
  //you can write e, event or anything.
  function handelClick(e) {
    console.log("You clicked me");
    console.log(e); // op : syntheticBasedEvent object is shown here. 
    console.log(e.target); // op : <button>Click Me</button>
    e.target.textContent = "You clicked me"
  }

  //Wrapper Function
  // function wrapperFunction(e) {
  //   handelClick2("kuldeep", "jhala", e);
  // }

  function handelClick2(firstName, lastName, e) {
    console.log("You are in handelClick2 function");
    console.log(firstName + " " + lastName);
    console.log(e);
  }

  function handelClick3() {
    console.log("You are in handelClick3 function");
  }

  // onClick attribute works on HTML Elements, h1, h2, button, p...

  return (
    <div>
      <h1>APP</h1>
      {/* Inside onClick, dont call with '()', dont do like this 'handelClick()' it will generate error. You just have to give function reference */}
      <button onClick={handelClick}>Click me</button>
      {/* 
        we can do like this but it will stop the program flow. So we use a wrapper function. In this method we cannot pass the event object.
        We can use a Wrapper function to do this work.
        <button onClick={handelClick("kuldeep", "jhala")}>Click me</button>  
      */}

      {/* 
        Generally we dont create a wrapper function we use arrow funciton as they are also wrapper fuction 
        <button onClick={wrapperFunction}>Click me 2</button>
      */}

      {/* We pass event object and value using arrow function. Browser will now call the arrow function. So we can pass event-object in the arrow funciton and pass it to other function*/}
      <button
        onClick={(e) => {
          console.log("You are in arrow function");
          e.target.textContent = "Button is now clicked"
          handelClick2("kuldeep", "jhala", e);
        }}
      > Click me 2 </button>

      {/* This onClick will go as a prop to the Greeting element */}
      <Greeting handelClick={handelClick3} />

    </div>
  );
}

export default App;