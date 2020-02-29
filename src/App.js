import React from 'react';
import './App.css';
import Main from "./pages/Main";
import Open from "./pages/Open";


import {BrowserRouter, Route, Switch} from 'react-router-dom'

function App() {
  return (
    <div className="App">
        <BrowserRouter>

            <Switch>
           <Route exact path="/" component={Main}/>
           <Route exact path="/open" component={Open}/>


      </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
