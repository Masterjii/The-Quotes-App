


import React from 'react';
import { Route, Routes} from 'react-router-dom';    //import by myself
import AllQuotes from './Components/Pages/AllQuotes';
import NewQuotes from './Components/Pages/NewQuotes';
import MainNav from './Components/MainNavigation/MainNav';
import ShowQuotes from './Components/Pages/ShowQuotes';


function App() {
  return (
    <React.Fragment>
      <MainNav />
        <Routes>
          <Route path='/' element={<AllQuotes />} />
          <Route path='/new' element={<NewQuotes />} />
          <Route path='/quotes/:id' element={<ShowQuotes />} />
        </Routes>
    </React.Fragment>
  );
}

export default App;