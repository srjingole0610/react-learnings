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
  const handleLowClick =  ()=>{
    
    console.log("Upper handle clicked")
    let newText = text.toLowerCase();
    setText(newText)

    setTimeout(() => {
      setText(oldText);
    }, 5000);
    
  }

  const handleOnTextChange = (event)=>{
    setText(event.target.value);
  }
  const handleClearText =  ()=>{  
    console.log("Clear handle clicked")
    setText("")
    document.getElementById("myBox").value = "";
  }
  return (
    <><div className="container my-5" style={{border: "2px solid #333", borderRadius: "15px", boxShadow: "5px 5px 10px #888", padding: "10px"}}>
      <h1 className="text-center" style={{color: "#333", textShadow: "2px 2px 5px #888"}}>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          value={text}
          onChange={handleOnTextChange}
          id="myBox"
          rows="8"
          style={{borderRadius: "15px", padding: "10px", backgroundColor: "#f5f5f5"}}
        ></textarea>
      </div>
      <button className="btn btn-primary mx-2" onClick={handleUpperClick} style={{borderRadius: "15px", boxShadow: "2px 2px 5px #888"}}>Convert to UpperCase</button>
      <button className="btn btn-primary mx-2" onClick={handleLowClick} style={{borderRadius: "15px", boxShadow: "2px 2px 5px #888"}}>Convert to LowerCase</button>
      <button className="btn btn-primary" onClick={handleClearText} style={{borderRadius: "15px", boxShadow: "2px 2px 5px #888"}}>Clear Text</button>
    </div>
    <div className="container my-4" style={{border: "2px solid #333", borderRadius: "15px", boxShadow: "5px 5px 10px #888", padding: "10px"}}>
        <h1 className="text-center" style={{color: "#333", textShadow: "2px 2px 5px #888"}}>Your text summary</h1>
        <p className="text-center" style={{color: "#333"}}>{text.trim() === "" ? 0 : text.split(" ").length} words and {text.trim() === "" ? 0 : text.length} characters</p>
        <p className="text-center" style={{color: "#333"}}>{text.trim() === "" ? 0 : 0.008 * text.split(" ").length} Minutes read</p>
        <h3 className="text-center" style={{color: "#333", textShadow: "2px 2px 5px #888"}}>Preview</h3>
        <p className="text-center" style={{color: "#333"}}>{text}</p>
      </div></>
  );
}

export default TextForm;

