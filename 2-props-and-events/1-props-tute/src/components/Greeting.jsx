function Greeting(props) {
  // function Greeting({firstName, lastName, age, userArr, userObj}) { //<= this is parameter destructuring
  // console.log(props); //It is an object
  // const firstName = props.firstName;
  // const lastName = props.lastName;
  // const age = props.age;
  // const userArr = props.userArr;
  // const userObj = props.userObj;

  const { firstName, lastName, age, userArr, userObj } = props; //Object(prop) destructuting

  return (
    <div>
      <h1>
        Hey {props.firstName} {props.lastName} {props.age} {props.userArr[0]}
        {props.userObj.hobbies}
        {/*we are using prop object to fetch the passed details.*/}
      </h1>
      <h1>
        hello {firstName} {lastName} {age} {userArr[1]} {userObj.hobbies}
      </h1>
    </div>
  );
}

export default Greeting;
