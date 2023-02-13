/* Modules */
import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';

/* Pages */
import Home from './pages/Home';
import Error from './pages/Error';

const App = () => {
  return (
    <HashRouter>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="*" exact element={<Error />} />
        </Routes>
    </HashRouter>
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="https://mselek.github.io/movies-data-api" exact element={<Home />} />
    //     <Route path="*" exact element={<Error />} />
    //   </Routes>
    // </BrowserRouter>
  );
};

export default App;