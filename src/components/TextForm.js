import React, { useState } from "react";

/**
 * TextForm is a React component that renders a text box with a heading
 * and a button to convert the text to upper case.
 *
 * @param {Object} props - component props
 * @param {string} props.heading - heading to display above the text box
 */
function TextForm(props) {
  const [text, setText] = useState("Enter your text here");
  const oldText = "Enter your text here";
  const handleUpperClick =  ()=>{
    
    console.log("Upper handle clicked")
    let newText = text.toUpperCase();
    setText(newText)

    setTimeout(() => {
      setText(oldText);
    }, 5000);
    
  }
  const handleOnTextChange = (event)=>{
    console.log("Text changed")
    setText(event.target.value)
  }
  return (
    <div>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          value={text}
          onChange={handleOnTextChange}
          id="myBox"
          rows="8"
        ></textarea>
      </div>
      <button className="btn btn-primary" onClick={handleUpperClick}>Convert to UpperCase</button>
    </div>
  );
}

export default TextForm;
