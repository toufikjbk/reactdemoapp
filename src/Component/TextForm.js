import React from "react";

import { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState(""); // here we set value for text="" and its now state of text(string) variable
  // now onward we can change value/state of text variable only when setText method get called.

  let setNewText = (event) => {
    // when a function called on any event then we have access of that event.
    setText(event.target.value); //through event we access target element on which event will occur and fetch its value.
  };

  let capitalcase = (event) => {
    let cap = text.toUpperCase();
    setText(cap); //setting text value
    if (text.length > 0) props.alertmsg("text converted to capital", "success");
    else props.alertmsg("Enter text !", "danger");
  };

  let lowercase = (event) => {
    let low = text.toLowerCase();
    setText(low);
    if (text.length > 0)
      props.alertmsg("text converted to lowercase", "success");
    else props.alertmsg("Enter text !", "danger");
  };

  let copyText = () => {
    navigator.clipboard.writeText(text); //copy to clipboard
    if (text.length > 0) props.alertmsg("text copied !", "success");
    else props.alertmsg("Enter text !", "danger");
  };

  let removeExtraSpace = () => {
    setText(text.split(/[ ]+/).join(" ")); //split whole text in array of words separted by 1 or more space and join them using " "
    if (text.length > 0) props.alertmsg("extra spaced removed", "success");
    else props.alertmsg("Enter text !", "danger");
  };

  let clearText = () => {
    if (text.length > 0) {
      setText("");
      props.alertmsg("text cleared", "success");
    } else props.alertmsg("Enter text !", "danger");
  };

  return (
    <>
      <div className="container my-3" style={props.style}>
        <h2>Enter Text here</h2>
        <textarea
          onChange={setNewText} // js function accessed in jsx
          value={text} //js string variable access n jsx.
          placeholder="Type a text here"
          rows="10"
          className="form-control"
          id="writeText"
          style={props.boxstyle}
        ></textarea>
        <br></br>
        <button type="button" className="btn btn-primary" onClick={capitalcase}>
          Uppercase Case
        </button>
        <button
          type="button"
          className="btn btn-primary mx-2"
          onClick={lowercase}
        >
          Small Case
        </button>
        <button
          type="button"
          className="btn btn-primary mx-2"
          onClick={copyText}
        >
          copy text
        </button>
        <button
          type="button"
          className="btn btn-primary mx-2"
          onClick={removeExtraSpace}
        >
          Remove Extra Spaces
        </button>

        <button
          type="button"
          className="btn btn-primary mx-2"
          onClick={clearText}
        >
          Clear text
        </button>
        <br />
        <br />
        <p>
          <h3>Your text summary</h3>
          <b>
            Word count is{" "}
            {
              text.split(/[ ]+/).filter((a1) => {
                return a1.length !== 0;
              }).length
            }{" "}
            and character count is {text.length}
          </b>
        </p>
      </div>
    </>
  );
}
