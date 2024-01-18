import React from "react";
import User from "../User";

// function Users({ users }) {
//   return (
//     <div>
//       {users.map(user =>
//             <div>
//                 firstName: {user.firstName}
//             </div>
//         )}
//     </div>
//   );
// }

// function Users({ users }) {
//   return (
//     <div>
//       {/* It will pass whole object as prop */}
//       {users.map((user) => (
//         <User userDetail={user} />
//       ))}
//     </div>
//   );
// }

// function Users({ users }) {
//   return (
//     <div>
//       {/* {users.map((user) => {
//         return (
//           <div className="user">
//             <p>firstName : {user.firstName}</p>
//             <p>lastName : {user.lastName}</p>
//             <p>age : {user.age}</p>
//           </div>
//         );
//       })} */}
//     </div>
//   );
// }

function Users({ users, increaseAge }) {
  return (
    <div>
      {/* It will first destructure the object and then it will pass multiple props */}
      {users.map((user) => (
        <User {...user} key={user.id} increaseAge={increaseAge} />
      ))}
    </div>
  );
}

export default Users;
