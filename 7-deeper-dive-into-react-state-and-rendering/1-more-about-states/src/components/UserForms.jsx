import DisplayFullName from "./DisplayFullName";
import TestComponent from "./TestComponent";
import { useState } from "react";

function UserForms() {
  console.log("UserForm component rendered");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  //   const [fullName, setFullName] = useState(""); //you dont need to create state inorder to merge two states
  const fullName = firstName + " " + lastName; //This is how you can merge the states
  console.log("New fullName : " + fullName);

  return (
    <form>
      <h1>Form</h1>
      <div>
        <label htmlFor="firstName">FirstName </label>
        <input
          type="text"
          name="firstName"
          id="firstName"
          value={firstName}
          onChange={(e) => {
            setFirstName(e.target.value);
            /* setFullName(e.target.value + " " + lastName); */
          }}
        />
      </div>
      <br />
      <div>
        <label htmlFor="lastName">LastName </label>
        <input
          type="text"
          name="lastName"
          id="lastName"
          value={lastName}
          onChange={(e) => {
            setLastName(e.target.value);
            /* setFullName(firstName + " " + e.target.value); */
          }}
        />
      </div>
      <h2>user Detail</h2>
      <p>firstName: {firstName}</p>
      <p>lastName: {lastName}</p>
      {/* <p>fullName: {fullName}</p> */}
      {/* <p>fullName: {fullName}</p> */}
      <p>
        fullName: <DisplayFullName fullName={fullName} />{" "}
        {/* Here we are able to implement because when parent component is rendered then child component is also rendered */}
      </p>
      <TestComponent />
    </form>
  );
}

export default UserForms;
