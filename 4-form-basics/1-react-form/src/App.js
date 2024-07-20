import { useState } from "react";
import { password } from "react";
//All form data is stored in state. If I have 2 input fields then I need 2 states.
//There are two types of form
//1. Controlled components
// Here in "<input type="text" id="username" value={ userName } />" input field the value attribute is always our state's data.
// So its value is controlled. The value which is in userName state will be in the inputField. So our component is controllled using react state
//2. Uncontrolled components
function App() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  console.log("outside function 'userName' => " + userName);

  function handelUserName(e) {
    setUserName(e.target.value); //username set
    console.log("key pressed => " + e.target.value); //single character print
    console.log("inside function username => " + userName); //username print
    console.log(" ");
  }

  function handelSubmit(e) {
    e.preventDefault(); //This will prevent to refresh page when submit button is clicked.
    console.log("Form submitted");
    console.log("Username : " + password);
    console.log("Password : " + userName);
  }

  return (
    <div className="App">
      <h1>Form Tutorial </h1>
      <form onSubmit={handelSubmit}>
        {" "}
        {/* page will refresh when submit button is clicked */}
        <label htmlFor="username">username: </label>
        <input
          type="text"
          id="username"
          value={userName}
          onChange={handelUserName}
        />
        <br />
        <label htmlFor="pasword">password: </label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            console.log(e.target.value);
          }}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
      <br />
      <br />
      <br />
      username : {userName}
      <br />
      password : {password}
    </div>
  );
}

export default App;
