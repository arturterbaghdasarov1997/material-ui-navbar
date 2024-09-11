import React from 'react';
import './App.css';
import Router from './router/Router';

const App:React.FC = () => {
  return (
    <>
      {/* <Navbar routes={routes} /> */}
      <Router />
    </>
  );
}

export default App;
