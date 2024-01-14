import React from 'react'
import Greeting from './components/Greeting'
const userArr = ["user1", "user2"];
const userObj = {
    hobbies: "bikes",
    age: 21
};
function App() {
    return (
        <div>

            {/* when we are passing string then it is passed in " " double quots*/}
            {/* <Greeting firstName="akash" /> 
            <Greeting lastName="abc" /> */}
            {/* <Greeting firstName="Kuldeepsinh" lastName="Jhala" /> */}
            {/* when we are passing int then it is passed in { } curyly brackets*/}
            {/* <Greeting firstName="Kuldeepsinh" lastName="Jhala" age={20} /> */}
            {/* when we are passing array then it is passed in { } curyly brackets*/}
            {/* <Greeting firstName="Kuldeepsinh" lastName="Jhala" age={20} userArr={userArr} /> */}
            {/* when we are passing object then it is passed in { } curyly brackets*/}
            <Greeting firstName="Kuldeepsinh" lastName="Jhala" age={20} userArr={userArr} userObj={userObj} />

        </div>
    )
}

export default App
