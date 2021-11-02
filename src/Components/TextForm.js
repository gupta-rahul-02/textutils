import React  , {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
       // console.log("Uppercase was clicked" +text);
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleOnChange = (event) =>{
       // console.log("On change");
        setText(event.target.value);
    }

    const handleLowClick = ()=>{
        console.log("Lower Case was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText);
    }
    const [text , setText] = useState('Enter the text here')
    //text = "nex text"; wronng way to change state
    //setText("new text"); // correct way to change the state
    return (
    <div>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div>
        <button className=" btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
        
        <button className="btn btn-primary " onClick={handleLowClick}>Convet to Lowercase</button>
    
        
    </div>
    )
}
