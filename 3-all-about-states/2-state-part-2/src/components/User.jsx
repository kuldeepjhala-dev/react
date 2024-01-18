import React from "react";

// function User({ userDetail }) {
//   return (
//     <div className="user">
//       <p>firstName : {userDetail.firstName}</p>
//       <p>lastName : {userDetail.lastName}</p>
//       <p>age : {userDetail.age}</p>
//     </div>
//   );
// }

function User({ firstName, lastName, age, id, increaseAge, deleteUser }) {
  return (
    <div className="user">
      <p>firstName : {firstName}</p>
      <p>lastName : {lastName}</p>
      <p>age : {age}</p>
      <p>id : {id}</p>
      <button
        onClick={() => {
          increaseAge(id);
        }}
      >
        Increase Age
      </button>
      <button
        onClick={() => {
          deleteUser(id);
        }}
      >
        Delete User
      </button>
    </div>
  );
}

export default User;
