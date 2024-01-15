import React from 'react'
import Greeting from './components/Greeting'
import DefaultProps from './components/DefaultProps';
import ParentProps from './components/ParentProps';
import Greeting2 from './components/Greeting2';
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
            {/* <Greeting firstName="Kuldeepsinh" lastName="Jhala" age={20} userArr={userArr} userObj={userObj} /> */}
            {/* Below the fullName prop is not passed but it is defined as default in component so user can use it*/}
            {/* <DefaultProps firstName="Kuldeep" lastName="jhala" /> */}
            {/* Below the fullName prop is passed so it will override the default prop and this 
            passed fullName will be used*/}
            {/* <DefaultProps firstName="Narendra" lastName="Modi" fullName="PM Narendra Modi" /> */}
            {/* <ParentProps firstName="Kuldeep" lastName="Jhala" /> */}
            {/* Anything we write between opening and closing tag, it will go to children prop */}
            <Greeting2 firstName="Kuldeep" lastName="Jhala" >
                <h1>Hello Who are you ?</h1>
            </Greeting2>
        </div >
    )
}

export default App
