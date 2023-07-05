import React, {useState} from 'react'

export default function TextForm(props) {
    const [text,setText]=useState(" ");
    const UpClick=()=>{
        let newText=text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to uppercase!", "success");
    }
    const LowClick=()=>{
        let newText=text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to lowercase!", "success");

    }
    const ClearClick=()=>{
        let newText='';
        setText(newText)
        props.showAlert("Text Cleared!", "success");
    }
    const handleCopy=()=> {
        navigator.clipboard.writeText(text);
        props.showAlert("Copied to clipboard", "success");
    }
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra spaces removed", "success");
    }
    const UpHandeler=(event)=>{
        setText(event.target.value)
    }
    return (
    <>
    <div className='container' style={{color:props.mode==='dark'?'white':'#042743'}}>
        <h3>{props.Heading}</h3>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={UpHandeler} style={{backgroundColor: props.mode==='dark'?'Grey':'white', color:props.mode==='dark'?'white':'#042743'}} id="mybox" rows="8"></textarea>
        <button className="btn btn-primary my-2" onClick={UpClick}>Convert To UpperCase</button>
        <button className="btn btn-primary my-2 mx-3" onClick={LowClick}>Convert To LowerCase</button>
        <button className="btn btn-primary my-2 mx-3" onClick={ClearClick}>Clear</button>
        <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove extra spaces</button>
        <button className="btn btn-primary my-2 mx-3" onClick={handleCopy}>Copy text</button>
        </div>
    </div>
    <div className="container my-2" style={{color:props.mode==='dark'?'white':'#042743'}}>
        <h3>Your text Summary</h3>
        <p>{text.split(" ").length} Words and {text.length} Characters are present</p>
        <p>{0.008 * text.split(" ").length} Minutes avg to read</p>
        <h5>Preview</h5>
        <p>{text}</p>
    </div>
    </>
  )
}
