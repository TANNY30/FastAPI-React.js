import React, {useState} from 'react'



export default function TextForm(props) {
    const handleUpClick=()=>{
        //console.log("Uppercase button was clicked!" + text);
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase !", "success");
    }

    const handleCopy=() => {
        let text = document.getElementById("exampleFormControlTextarea1");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to clipboard !", "success");
    }

    const handleLoClick=()=>{
        //console.log("Uppercase button was clicked!" + text);
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to LowerCase !", "success");
    }
    const handleOnChange=(event)=>{
        //console.log("handleOnChange");
        setText(event.target.value);
    }


    const removeExtraSpaces=() => {
        let newText = text.split(/[ ]+/);
        props.showAlert("Extra spaces removed !", "success");
    }

    const [text, setText] = useState('');
  return (
    <>
    <div className="container" my-3="true" style={{color: props.mode==='dark'?'white':'black'}}>
        <h2>{props.heading}</h2>
        <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'white':'black',color: props.mode==='dark'?'black':'white'}} id="exampleFormControlTextarea1" rows="8"></textarea>
            <button className="btn btn-primary my-2" onClick={handleUpClick} >Convert to UpperCase</button>
            <button className="btn btn-warning mx-2 my-2" onClick={handleLoClick} >Convert to LowerCase</button>
            <button className="btn btn-danger mx-2 my-2" onClick={handleCopy} >Copy Text</button>
            <button className="btn btn-success mx-2 my-2" onClick={removeExtraSpaces} >Remove Extra Spaces</button>
        </div>
    </div>
    < div className="container" my-2 ="true" style={{color: props.mode==='dark'?'white':'black'}}>
        <h1>Your Text Summary</h1>
        <p>{text.split(" ").filter((ele)=>{return ele.length!==0}).length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} minutes read</p>
        <h2>Preview</h2> 

        <p>{text.length >0 ? text:"Enter something in text box to preview here."}</p>

    </div>

    
    </>
  )
}
