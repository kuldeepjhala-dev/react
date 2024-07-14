import { useState } from "react";

function StateExampleObject() {
  const [person, setPreson] = useState({
    id: 1,
    firstName: "kuldeep",
    lastName: "Jhala",
    email: "kuldeep@gmial.com",
    phone: "9999999999",
    age: 24,
  });

  //It will replace the object and makes a new object with data 'age:age+1'.
  // const increaseAge = () => {
  //   setPreson({
  //     age: person.age + 1,
  //   });
  // };

  //So whenever you use any setState() method then it will replace the whole variable, array or object. So you have to keep the original variable, array or object which adding the new data in it.

  // <>---------Javascript-Explanation-On-Object-Copy---------</>
  {
    /*
    const person = {
    id: 1,
    firstName: "kuldeep",
    lastName: "Jhala",
    email: "kuldeep@gmial.com",
    phone: "9999999999",
    age: 24,
    };

    //Below person object data is copied in newPerson object
    const newPerson = { 
      ...person
    }

    //Below person object data is copied in newPerson2 object but with that the value of person object 'age: 24' is replace with 'age: 30'
    const newPerson2 = { 
      ...person,
      age: 30 //This will update the age value from 24 to 30.
    }
  */
  }

  const increaseAge = () => {
    // setPreson({
    //   ...person,
    //   age: person.age + 1,
    // });
    //     or
    //Callback Syntax
    // setPreson((prevState) => {
    //   return {
    //     ...prevState,
    //     age: prevState.age + 1,
    //   };
    // });

    //without return keyword just add () brackets after => so it will consider it as a return statement
    setPreson((prevState) => ({ ...prevState, age: prevState.age + 1 }));
  };

  return (
    <div>
      <p>firstName: {person.firstName} </p>
      <p>lastName: {person.lastName} </p>
      <p>email: {person.email} </p>
      <p>phone: {person.phone} </p>
      <p>age: {person.age} </p>
      <button onClick={increaseAge}>Increase Age</button>
    </div>
  );
}
export default StateExampleObject;
