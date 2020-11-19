import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import { Counter } from './pages/counter';

function Count(props) {
  const match = useRouteMatch();
  console.log({ match });

  return (
    <>
      <Switch>
        <Route exact path={match.url} component={Counter} />
      </Switch>
    </>
  )
}

export default Count;