import React, {useState} from 'react'
// useState is a hook 


export default function TextForm(props) {
    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleOnChange = (event)=>{
        // To let us update the textarea by typing in
        setText(event.target.value)
    }
    const [text, setText]=useState('Enter text here')
    // text = "New Text"  //Wrong way to change the state
    // setText("New Text") //Correct way to change the state
   return (
    <div>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className='form-control' id="myBox" onChange={handleOnChange} rows="7" value={text}></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}>Convert to upperCase</button>
    </div>
  )
}

