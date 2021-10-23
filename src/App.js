import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import AddScreen from './screens/AddScreen';
import EditScreen from './screens/EditScreen';
import HomeScreen from './screens/HomeScreen';

const App = () => {
  return (
    <BrowserRouter>
    <Navbar />
    <Switch>
        <Route exact path="/">
          <HomeScreen></HomeScreen>
        </Route>
        <Route path="/add">
          <AddScreen></AddScreen>
        </Route>
        <Route exact path="/edit/:id">
          <EditScreen></EditScreen>
        </Route>
    </Switch>
    </BrowserRouter>
  )
}

export default App
