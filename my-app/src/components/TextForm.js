import React, { useState } from 'react' //import usestate hook

export default function TextForm(props) {

    const handlUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handlLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }

    const clearText = () => {
        let newText = "";
        setText(newText);
    }

    const makeFirstCharacterCapital = () => {
        let newText = text.charAt(0).toUpperCase() + text.slice(1);
        setText(newText);
    }

    const handleOnChange = (event) => {
        setText(event.target.value)
    }

    const [text, setText] = useState("");

    return (
        <>
            <div className="container">
                <h2>{props.heading} </h2>
                <div className="mb-3">
                    <textarea className="form-control" id="myBox" value={text} onChange={handleOnChange} rows="3"></textarea>
                </div>
                <button className='btn btn-primary' onClick={handlUpClick}>Convert to UpperCase</button>
                <button className='btn btn-primary mx-2' onClick={handlLoClick}>Convert to LowerCase</button>
                <button className='btn btn-primary mx-2' onClick={clearText}>Clear text</button>
                <button className='btn btn-primary mx-2' onClick={makeFirstCharacterCapital}>Make first letter capital</button>
            </div>
            <div className="container my-3">
                <h1>Your text summary</h1>
                <p>{text.split(" ").length} words, {text.length} characters</p>
                <p>{(0.008) * (text.split(" ").length)} minutes read.</p>
                <h2>Preview</h2>
                {text}
            </div>
        </>
    )
}
