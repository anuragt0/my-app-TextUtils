import React, {useState} from 'react'
// useState is a hook 

export default function TextForm(props) {
    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleLoClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleOnChange = (event)=>{
        // To let us update the textarea by typing in
        setText(event.target.value)
    }
    const [text, setText]=useState('')
    // text = "New Text"  //Wrong way to change the state
    // setText("New Text") //Correct way to change the state
   return (
       <>
    <div className='container'>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className='form-control' id="myBox" placeholder='Enter text here' onChange={handleOnChange} rows="7" value={text}></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to upperCase</button>
        <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to lowerCase</button>
    </div>

    <div className="container my-2">
        <h2>Your text summary</h2>
        <p>{text.split(" ").length} words, {text.length} characters</p>
        <p>{0.008*text.split(" ").length} minutes read</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>

    </>
  )
}

