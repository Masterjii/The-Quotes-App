




import axios from 'axios';
import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

function NewQuotes() {

  let navigate = useNavigate();
  let usernameInputRef = useRef();
  let quoteInputRef = useRef();

  async function addQuoteHandler(e) {
    e.preventDefault(); 
    let author = usernameInputRef.current.value;
    let text = quoteInputRef.current.value;

    try {
      let res = await axios.post('http://localhost:8000/addquotes', { author, text });
      navigate('/');
    } catch (error) {
      console.log('error', error);
    }
  }

  return (
    <div>
      <form onSubmit={addQuoteHandler} >
        <div>
          <label htmlFor="naam">Author</label>
          <input type="text" id="naam" placeholder='Authors name' ref={usernameInputRef} />
        </div>
        <div>
          <label htmlFor="textt">Quote</label>
          <textarea name="" id="textt" cols="30" rows="10" placeholder='Author Quotes' ref={quoteInputRef}></textarea>
        </div>
        <button>Add Quote</button>
      </form>
    </div>
  )
}

export default NewQuotes;











