import React, { useState } from "react";

function About() {
  const [myStyle, setMyStyle] = useState({
    color: 'white',
    backgroundColor: 'black',
  });

  const [btnText, setBtnText] = useState("Enable Light Mode");

  const toggleStyle = () => {
    if (myStyle.color === 'white') {
      setMyStyle({
        color: 'black',
        backgroundColor: 'white',
        border: '1px solid black',
      });
      setBtnText("Enable Dark Mode");
    } else {
      setMyStyle({
        color: 'white',
        backgroundColor: 'black',
        border: '1px solid white',
      });
      setBtnText("Enable Light Mode");
    }
  };

  return (
    <div
      className="container my-3 rounded-3 shadow-lg"
      style={{
        ...myStyle,
        boxShadow:
          "0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)",
        transition: "all 0.3s ease-in-out",
        animation: "fadeIn 0.5s ease-in-out",
      }}
    >
      <h2 className="text-center text-primary display-2">About TextUtils</h2>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              What is TextUtils?
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <strong>TextUtils is a utility which can be used to manipulate your text content in your own way</strong>
            </div>
          </div>
        </div>

        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              How to use TextUtils?
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <strong>TextUtils provides an easy-to-use interface for manipulating text. You can use it to convert your text to uppercase, lowercase, or title case, as well as to remove extra whitespace and punctuation. You can also use it to convert your text to a URL-safe format, to escape special characters, and to check whether a string contains a particular substring.</strong>
            </div>
          </div>
        </div>

        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Why TextUtils?
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <strong>TextUtils is a useful tool for anyone who works with text. Whether you're a developer, a writer, or just someone who likes to play with words, TextUtils makes it easy to manipulate and analyze text. It's also a great tool for learning about the different methods of manipulating text in JavaScript.</strong>
            </div>
          </div>
        </div>
      </div>

      <div className="d-flex flex-column align-items-center p-3">
        <button
          type="button"
          className="btn btn-primary m-2"
          onClick={toggleStyle}
          style={{
            boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)",
            transition: "all 0.3s ease-in-out",
          }}
          onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#333")}
          onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "")}
          onFocus={(e) => (e.currentTarget.style.backgroundColor = "#333")}
          onBlur={(e) => (e.currentTarget.style.backgroundColor = "")}
        >
          {btnText}
        </button>
      </div>
    </div>
  );
}

export default About;
