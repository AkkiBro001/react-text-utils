import React, { useState } from 'react'

export const TextForm = (props) => {
    
    const [text, setText] = useState('')

    
    const onChangeHandler = (event) => {
        setText(event.target.value);
        
    }

    
    const upperCaseFunction = () => {
        
        if(text === '') return props.alertfn("Value is empty", "danger")
        
        const newText = text.toUpperCase();
        setText(newText);
        
        
        
    }

    
    const lowerCaseFunction = () => {
        
        if(text === '') return props.alertfn("Value is empty", "danger")
        
        const newText = text.toLowerCase();
        setText(newText);
        
        
    }

     
     const titleCaseFunction = () => {
         
        if(text === '') return props.alertfn("Value is empty", "danger")
        
        let newText = String(text).split(' ');
        newText = newText.map(word => {
            
            if(word.charAt(0).match(/\W/)){
               return word.charAt(0) + word.charAt(1).toUpperCase() + word.slice(2).toLowerCase()
            }else{
               
                return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
            }
        }).join(' ')
        setText(newText);
        
        
    }

    
    const copyTextFunction = () => {
        
        if(text === '') return props.alertfn("Value is empty", "danger")
        
        navigator.clipboard.writeText(text);

        props.alertfn("Text copied.", "")
        
    }

     
     const handleExtraSpace = () => {
         
        if(text === '') return props.alertfn("Value is empty", "danger")
        const newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        
    }


    
    const clearFunction = () => {
        
        const newText = '';
        setText(newText);
        
    }
     return (
        <>
        <div className={`container text-${props.modes === 'light' ? 'dark' : 'light'}`}>
            <h2 className='mt-4'>{props.heading}</h2>
            <div className="mb-3">
                
                <textarea className={`form-control bg-${props.modes} text-${props.modes === 'light' ? 'dark' : 'light'}`} id="textForm" rows="8" value={text} onChange = {onChangeHandler} placeholder='Enter Text here...'></textarea>
            </div>
            
            <button className={`btn btn-${text.length === 0 ? 'secondary' : 'danger'} mx-1 my-1 ${text.length === 0 ? 'disabled' : ''}`} onClick={upperCaseFunction}>Convert To UpperCase</button>
            <button className={`btn btn-${text.length === 0 ? 'secondary' : 'danger'} mx-1 my-1 ${text.length === 0 ? 'disabled' : ''}`} onClick={lowerCaseFunction}>Convert To LowerCase</button>
            <button className={`btn btn-${text.length === 0 ? 'secondary' : 'danger'} mx-1 my-1 ${text.length === 0 ? 'disabled' : ''}`} onClick={titleCaseFunction}>Convert To TitleCase</button>
            <button className={`btn btn-${text.length === 0 ? 'secondary' : 'danger'} mx-1 my-1 ${text.length === 0 ? 'disabled' : ''}`} onClick={copyTextFunction}>Copy Text</button>
            <button className={`btn btn-${text.length === 0 ? 'secondary' : 'danger'} mx-1 my-1 ${text.length === 0 ? 'disabled' : ''}`} onClick={handleExtraSpace}>Remove Extra Space</button>
            <button className={`btn btn-${text.length === 0 ? 'secondary' : 'danger'} mx-1 my-1 ${text.length === 0 ? 'disabled' : ''}`} onClick={clearFunction}>Clear Text</button>
        </div>
        
        <div className={`container my-3 text-${props.modes === 'light' ? 'dark' : 'light'}`}>
            <h2>Text Summary</h2>
            <ul>
               
                <li><b>Total Words :</b> {text.split(/\s+/).filter(word => word !== "").length}</li>
                <li><b>Total Characters :</b> {text.length}</li>
                <li><b>Total Min. to Read :</b> {(0.008 * text.split(/\s+/).filter(word => word !== "").length).toFixed(2)}</li>
            </ul>
            <h3>Preview</h3>
           
            <p>{text === "" ? 'Nothing to Preview' : text}</p>
        </div>
        </>
    )
}
