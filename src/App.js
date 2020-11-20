import './App.css';
import React, { Suspense } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import Counter from './features/counter';
import { NotFound } from './component/notFound';
import { withTranslation } from 'react-i18next';

function App(props) {
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

export default withTranslation()(App);
