import React from 'react'

function DefaultProps({ firstName, lastName, fullName = "KuldeepsinhJhala" }) {
  return (
    <div>
      <h1>firstName : {firstName}</h1>
      <h1>lastName : {lastName}</h1>
      <h1>fullName : {fullName}</h1>
    </div>
  );
}

export default DefaultProps
