import './App.css';
import React, { Suspense, useState } from 'react';
import { HashRouter, BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import Counter from './features/counter';
import { NotFound } from './component/notFound';

function App() {

  return (
    <div className="App">
      <Suspense fallback={<div>Loading ...</div>}>
        <BrowserRouter>
          <Switch>
            <Redirect exact from="/" to="/count" />
            <Route path="/count" name="count" component= { Counter }/>
            <Route name="not found" component= { NotFound }/>
          </Switch>
        </BrowserRouter>
      </Suspense>
    </div>
  );
} 

export default App;
