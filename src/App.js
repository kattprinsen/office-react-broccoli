import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

import Navbar from './components/Navbar/Navbar';

import Error from './pages/Error/Error';
import Home from './pages/Home/Home';
import ShowRoom from './pages/ShowRoom/ShowRoom';
import Rooms from './pages/Rooms/Rooms';

export default function App() {

  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/rooms" component={Rooms} />
        <Route exact path="/rooms/:id" component={ShowRoom} />
        <Route component={Error} />
      </Switch>
    </div>
  );
}
