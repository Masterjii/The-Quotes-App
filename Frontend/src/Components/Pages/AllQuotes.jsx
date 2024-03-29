
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Quotes from '../Quotes/Quotes';   //Frontend bali file import kiye hein


function AllQuotes() {
  let [quotes, setQuotes] = useState([]);
  useEffect(() => {
    async function getQuotes() {
      const res = await axios.get('http://localhost:8000/allquotes');
      // console.log(res.data,'api bk');
      setQuotes(res.data);
    }
    getQuotes()
  }, []);

  return (
    <div>
        <h1>All Quotess</h1>
        <ul>
            {
                quotes.map((quote, index) => {
                  return (<Quotes id={quote._id} key={quote._id} text={quote.text} author={quote.author } />)
                })
            }
        </ul>
    </div>
  )
}

export default AllQuotes;













