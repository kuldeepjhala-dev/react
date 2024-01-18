import './App.css';
import { useState } from 'react';
import Users from './components/Users';

function App() {

  const [users, setUsers] = useState([
    { id: 1, firstName: "Kuldeep", lastName: "Jhala", age: 25 },
    { id: 2, firstName: "Jay", lastName: "Dhobi", age: 25 },
    { id: 3, firstName: "Viral", lastName: "Kapadia", age: 30 }
  ]);

  //we are doing prop drilling as increaseAge function is passed from App.jsx => Users.jsx => User.jsx using props.
  function increaseAge(id) {
    // console.log(id);
    // console.log("increase Age");

    //Javascript Programming way to update age
    // const newState = [];
    // for (let user of users) {
    //   if (user.id == id) {
    //     newState.push({ ...user, age: user.age + 1 });
    //   }
    //   else {
    //     newState.push(user);
    //   }
    // }
    // setUsers(newState);

    //React way to update age
    setUsers(prevState => {
      return prevState.map(user => {
        if (user.id === id) {
          return { ...user, age: user.age + 1 };
        }
        else {
          return user;
        }
      })
    });
  }

  const deleteUser = (id) => {

    // console.log(id, "delete User");

    //Javascript Programming way to delete user
    // const newState = [];
    // for (let user of users) {
    //   if (user.id !== id) {
    //     newState.push(user);
    //   }
    // }
    // setUsers(newState);

    //React way to update age
    // setUsers(prevState => {
    //   return prevState.filter(user => {
    //     return user.id !== id;
    //   })
    // });

    //Shorter-way
    setUsers(prevState => prevState.filter(user => user.id !== id));

  }

  return (
    <div className="App">
      <h1>State Example</h1>
      {/* Passing state as  prop */}
      <Users users={users} increaseAge={increaseAge} deleteUser={deleteUser} />
    </div>
  );
}

export default App;
