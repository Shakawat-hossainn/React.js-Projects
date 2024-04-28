import React, { useState } from 'react'

export default function TextForm(props) {
   const toUpCase = () => {

        setText(text.toUpperCase())
        props.showAlert("Converted to Uppercase","Success")
      
    }
   const toLowCase = () => {

        setText(text.toLowerCase())
        props.showAlert("Converted to Lowercase","Success")
      
    }
   const clearText = () => {

        setText("")
        props.showAlert("Clear Text","Success")
      
    }
    const changeHandle=(event) => {
        setText(event.target.value)
        
      
    }
    const capitalizeFirstLetterOfEachWord = () => {
        setText(text.replace(/\b\w/g, (char) => char.toUpperCase()));
        props.showAlert("It has been Capitalized","Success")
      };
    
    
    const [text , setText] = useState("")
  return (
    <>
  <div className="mb-3">
    <label htmlFor="exampleFormControlTextarea1" className="form-label"><h2>{props.heading} </h2></label>
    <textarea className="form-control" value={text} onChange={changeHandle} id="exampleFormControlTextarea1" rows="8"></textarea>
  </div>
  <button className="btn btn-primary mx-2" onClick={toUpCase}>Convert to UpperCase</button>
  <button className="btn btn-primary mx-2" onClick={toLowCase}>Convert to LowerCase</button>
  <button className="btn btn-primary mx-2" onClick={clearText}>Clear Text</button>
  <button className="btn btn-primary mx-2" onClick={capitalizeFirstLetterOfEachWord}>
        Capitalize First Letter of Each Word
      </button>
  
<h2>Your Words Count</h2>
<p>{text.split(" ").length} words and {text.length} characters</p>
<h2>Reading Time</h2>
<p>{0.08*text.split(" ").length} minutes to read</p>
<h2>Preview</h2>
<p>{text} </p>

  </>
  )
}

// More modern way to code

// import React, { useState } from 'react';

// export default function TextForm(props) {
//   const [text, setText] = useState('');

//   const toUpCase = () => {
//     setText(text.toUpperCase());
//   };

//   const toLowCase = () => {
//     setText(text.toLowerCase());
//   };

//   const changeHandle = (event) => {
//     setText(event.target.value);
//   };

//   // Count words
//   const wordCount = text.split(/\s+/).filter((word) => word !== '').length;

//   return (
//     <>
//       <div className="mb-3">
//         <label htmlFor="exampleFormControlTextarea1" className="form-label">
//           <h2>{props.heading}</h2>
//         </label>
//         <textarea
//           className="form-control"
//           value={text}
//           onChange={changeHandle}
//           id="exampleFormControlTextarea1"
//           rows="8"
//         ></textarea>
//       </div>
//       <button className="btn btn-primary mx-2" onClick={toUpCase}>
//         Convert to UpperCase
//       </button>
//       <button className="btn btn-primary" onClick={toLowCase}>
//         Convert to LowerCase
//       </button>

//       <h2>Your Words Count</h2>
//       <p>
//         {wordCount} {wordCount === 1 ? 'word' : 'words'} and {text.length} characters
//       </p>
//       <h2>Reading Time</h2>
//       <p>{0.08 * wordCount} minutes to read</p>
//       <h2>Preview</h2>
//       <p>{text}</p>
//     </>
//   );
// }

