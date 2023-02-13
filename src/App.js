/* Modules */
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

/* Pages */
import Home from './pages/Home';
import Error from './pages/Error';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="https://mselek.github.io/movies-data-api" exact element={<Home />} />
        <Route path="*" exact element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;