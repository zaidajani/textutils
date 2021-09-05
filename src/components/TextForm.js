import React, { useState } from 'react'

export default function TextForm(props) {
  const [ text, setText ] = useState('');

  let handleUpClick = () =>  {
    let newText = text.toUpperCase();
    setText(newText);  
  }

  let handleLowClick = () =>  { 
    let newText = text.toLowerCase();
    setText(newText);
  }

  let handleClear = () => {
    setText('');
  }

  let handleCopy = () => {
    navigator.clipboard.writeText(text);

    alert("Copied the text");
  }

  let handleOnChange = (event) =>  {
    console.log('Handle OnChange');
    setText(event.target.value);
  }

  return (
    <>
      <div className="container mt-4" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea className="form-control my-3" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? '#042743' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} id="MyBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick} >Convert to UpperCase</button>
        <button className="btn btn-primary mx-2" onClick={handleLowClick} >Convert to Lowercase</button>
        <button className="btn btn-primary mx-2" onClick={handleClear} >Clear</button>
        <button className="btn btn-primary" onClick={handleCopy} >Copy text</button>

      </div>
      <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
        <h2>Your text summary</h2>
        <p>{ text.split(" ").length } words and { text.length } characters</p>
        <p>{ 0.008 * text.split(" ").length } minutes Read</p>
        <h2>Preview</h2>
        <p>{ text.length > 0 ? text : "Enter something to preview it here" }</p>
      </div>
    </>
  )
}
