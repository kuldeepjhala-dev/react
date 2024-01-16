//hooks : 
//useState Hook; State means data or current state of the data. 

//In react we cannot use normal variables to change the UI.

//State
//State ---> (contains) ---> Data
//State ---> (chnages) ---> Data (changes)

function App() {
  let firstName = "John";
  function handelNameChange() {
    firstName = "Harshit";
  }
  return (
    <div className="App">
      <h1>{firstName}</h1>
      <button onClick={handelNameChange}>Change Name</button> {/* Even clicking on button will not chnage the name of the button. So now we will use state */}
    </div>
  );
}

export default App;
