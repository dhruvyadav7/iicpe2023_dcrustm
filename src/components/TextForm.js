import React, { useState } from "react";

export default function Textform(props) {
  const [text, setText] = useState("");
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert('Text changed to Upper Case', 'success')
  };
  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert('Text changed to Lower Case', 'success')

  };
  const clearText = () => {
    let newText = "";
    setText(newText);
    props.showAlert('Text Cleared ', 'success')

  };
  const copyText = () => {
    navigator.clipboard.writeText(text);
    props.showAlert('Text Coppied to Clipboard', 'success')

  };
  const onChange = (e) => {
    setText(e.target.value);
  };

  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "light" ? "black" : "white" }}
      >
        <h1 className="my-3">{props.heading} </h1>
        <textarea
          className="form-control"
          rows="8"
          id="myBox"
          value={text}
          onChange={onChange}
          style={{ backgroundColor: props.mode === "light" ? "white" : "#0a426a", color: props.mode === "light" ? "black" : "white" }}
        ></textarea>
        <button
          className="btn btn-primary my-3 mx-2"
          type="submit"
          onClick={handleUpClick}
          disabled={text.length === 0}
        >
          To Upper Case
        </button>
        <button
          className="btn btn-primary my-3 mx-2"
          type="submit"
          onClick={handleLowClick}
          disabled={text.length === 0}
        >
          To Lower Case
        </button>
        <button
          className="btn btn-primary my-3 mx-2"
          disabled={text.length === 0}
          type="submit"
          onClick={clearText}
        >
          To Clear Text
        </button>
        <button
          className="btn btn-primary my-3 mx-2"
          disabled={text.length === 0}
          type="submit"
          onClick={copyText}
        >
          To Copy Text
        </button>
      </div>
      <div className="contanier mx-2" style={{ color: props.mode === "light" ? "black" : "white" }}>
        <h1>Text Summary</h1>
        <p>{text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} words and {text.length} characters</p>
        <p>{0.008 * text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} Minutes read</p>

        <h2>Preview</h2>
        <p>{text === "" ? "Nothing to Preview" : text}</p>
      </div>
    </>
  );
}
