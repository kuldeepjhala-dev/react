import React, { useState } from 'react' //import usestate hook

export default function TextForm(props) {
    const handlUpClick = () => {
        console.log("Uppercase was clicked " + text);
        let newText = text.toUpperCase();
        setText(newText); 
    }

    const handleOnChange = (event) => {
        console.log("on change handleOnChange")
        setText(event.target.value)
    }

    const [text, setText] = useState('Enter text here');
    // text = "Change the text"; //Wrong way to change the state
    // setText("new Text"); //Correct way to change the state
    return (
        <div>
            <h1>{props.heading} </h1>
            <div className="mb-3">
                <textarea className="form-control" id="myBox" value={text} onChange={handleOnChange} rows="3"></textarea>
            </div>
            <button className='btn btn-primary' onClick={handlUpClick}>Convert to upperCase</button>
        </div>
    )
}
