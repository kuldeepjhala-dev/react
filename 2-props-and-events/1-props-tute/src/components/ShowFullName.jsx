import React from "react";

function ShowFullName({ firstName, lastName }) {
  return (
    <h1>
      FullName : {firstName} {lastName}
    </h1>
  );
}

export default ShowFullName;