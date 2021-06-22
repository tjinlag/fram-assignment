import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  RouteProps
} from "react-router-dom";
import CounterPage from './pages/CounterPage';
import EmployeeListPage from './pages/EmployeeListPage';
import HomePage from './pages/HomePage';
import { Grid } from '@material-ui/core';
import Header from './layout/Header';
import MyRoutes from './constants/MyRoutes';

const routes: RouteProps[] = [
  { path: '/counter', component: CounterPage, exact: true },
  { path: '/employees', component: EmployeeListPage, exact: true },
  { path: '/', component: HomePage, exact: true },
];

const tabs = [
  {label: 'Counter', to: MyRoutes.CounterPage},
  {label: 'Employees', to: MyRoutes.EmployeeListPage},
]

const App = () => {
  return (
    <Router>
      <Grid direction="column">
        <Header items={tabs} />
        <div>
          <Switch>
            {routes.map((data, idx) => <Route key={idx} {...data} />)}
          </Switch>
        </div>
      </Grid>
    </Router>
  );
}

export default App;
