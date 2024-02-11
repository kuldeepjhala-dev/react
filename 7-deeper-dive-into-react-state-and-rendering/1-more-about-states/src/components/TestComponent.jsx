import React from "react";

function TestComponent() {
  console.log("Test component rendered");

  return (
    <>
      <h1>Parent Component</h1>
      <h2>
        Whenever parent component is rendered then child component is rendered
      </h2>
    </>
  );
}

export default TestComponent;
