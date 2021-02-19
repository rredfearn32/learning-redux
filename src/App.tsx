import { FC } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import store from './state/store';
import { Provider } from 'react-redux';

import { Home } from './pages/Home';
import { AddTodo } from './pages/AddTodo';
import { Todos } from './pages/Todos';

import './App.css';

const App: FC = () => {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/todos">Todos</Link>
            </li>
            <li>
              <Link to="/add-todo">Add Todo</Link>
            </li>
          </ul>

          <hr />

          {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/todos">
              <Todos />
            </Route>
            <Route path="/add-todo">
              <AddTodo />
            </Route>
          </Switch>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
