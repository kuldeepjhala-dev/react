import React from "react";
//If the "fullName" prop is not send the we will use the default value for the fullName 
function DefaultProps({ firstName, lastName, fullName = "KuldeepsinhJhala" }) {
  return (
    <div>
      <h1>firstName : {firstName}</h1>
      <h1>lastName : {lastName}</h1>
      <h1>fullName : {fullName}</h1>
    </div>
  );
}

export default DefaultProps;
