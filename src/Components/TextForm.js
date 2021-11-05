import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("Uppercase was clicked" +text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to upper case","success");
  };

  const handleOnChange = (event) => {
    // console.log("On change");
    setText(event.target.value);
  };

  const handleLowClick = () => {
    //console.log("Lower Case was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lower case","success");
  };

  const handleClearClick = () => {
    let newText ='';
    setText(newText);
    setEmail(newText);
    props.showAlert("Text has been cleared","success");
  };

  const handleEmailClick = () => {
    let newText = text.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi)+" ";;
    //console.log(newText);
    setEmail(newText.toLowerCase());
    props.showAlert("Emails are extracted from text","success");
  };

  const [email, setEmail] = useState("");
  const [text, setText] = useState("");
  //text = "nex text"; wronng way to change state
  //setText("new text"); // correct way to change the state
  return (
    <>
    <div style={{color: props.mode === 'dark'?'white':'black'}}>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          value={text}
          onChange={handleOnChange}
          style={{backgroundColor: props.mode === 'light'?'white':'grey', color:props.mode ==='dark'?'white':'black'}}
          id="myBox"
          rows="8"
        ></textarea>
      </div>
      <button className=" btn btn-primary mx-2" onClick={handleUpClick}>
        Convert to Uppercase
      </button>
      <button className="btn btn-primary mx-2" onClick={handleLowClick}>
        Convet to Lowercase
      </button>
      <button className="btn btn-primary mx-2" onClick={handleClearClick}>
        Clear Text
      </button>
      <button className="btn btn-primary mx-2" onClick={handleEmailClick}>
        Get Email
      </button>
    </div>

    <div className="container my-3" style={{color: props.mode === 'dark'?'white':'black'}}>
        <h2>Your text summary</h2>
        <p>{text.split(" ").length-1} words and {text.length} characters</p>
        <p>Minimum time required to read the text :- {0.008 * (text.split(" ").length-1)} Minutes</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:'Enter sommething in the  textbox above to preview it'}</p>
        <h2>Emails Found</h2>
        <p>{email}</p>
    </div>
    </>
  );
}
