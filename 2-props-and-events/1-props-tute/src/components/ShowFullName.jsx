import React from "react";

function ShowFullName({ firstName, lastName }) {
  return (
    <h1>
      {/* Both above props are destructured and and used to sho full name */}
      FullName : {firstName} {lastName}
    </h1>
  );
}

export default ShowFullName;
