import React from "react";
import "./Greeting.css"; //css file import

function Greeting() {
  const FirstName = "Kuldeepsinh";

  const firstName = (name) => name.toUpperCase();

  return (
    <div className="bg-dark">
      {/*use className instead of class*/}
      <h1>Hello {firstName(FirstName)}</h1> {/*if you want to use javascript*/}
      <h1>Hello {`${firstName(FirstName)} how are you`}</h1>
      {/*Template string*/}
      <h1>hello, {2 * 3}</h1>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus
        architecto tempora quae voluptate consequuntur necessitatibus
        perspiciatis doloremque ut id voluptatum!
      </p>
      <h2>Form</h2>
      <div>
        <label htmlFor="fName">First Name</label>
        {/*use htmlFor instead of html*/}
        <input type="text" id="fName" />
      </div>
    </div>
  );
}

export default Greeting;
