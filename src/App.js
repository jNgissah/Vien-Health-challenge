import * as React from 'react';
import ReactDOM from 'react-dom'

import logo from './logo.svg';
import './App.css';
import Menu from './menu';
import Home from './home';
import Footer from './footer';
function App() {
    return (
        <div className="App" >
    < Menu/>
   <Home/>
   <Footer/>
    </div>
  );
}

export default App;
