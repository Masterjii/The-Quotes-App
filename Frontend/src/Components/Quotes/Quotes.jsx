import axios from "axios";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";

function Quotes(props) {
  let navigate = useNavigate();
  function showQuoteHandler(id) {
    navigate(`/quotes/${id}`);
  }
  const handleDeleteQuote = async(e) => {
    const quoteId = e.target.dataset.quoteId
    try{
      await axios.delete(`http://localhost:8000/quotes/${quoteId}`);
      alert('Your file is Deleted');
      navigate('/home');
    }
    catch(error){
      console.log(error);
    }
  };
  return (
    <li>
      <span>
        <h1>Text: {props.text} </h1>
        <h3>Author: {props.author} </h3>
      </span>
      <button onClick={() => showQuoteHandler(props.id)}>View more</button>
      <button data-quote-id={props.id} onClick={handleDeleteQuote} >Delete</button>
    </li>
  );
}

export default Quotes;
