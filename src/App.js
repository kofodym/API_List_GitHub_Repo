import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { Main} from './components/Route'
import GitHub_Repository from './components/Route/GitHub_Repository';
import ErrorPage from './components/Route/ErrorPage';
import ErrorComponent from './components/Route/ErrorComponent';

import './App.css'

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/github_repository/*" element={<GitHub_Repository />} />
          <Route path='/error-boundary' element={<ErrorComponent/>} />
          <Route path='*' element={<ErrorPage/>}/>
    
          {/* Redirect to the Home Page */}
          <Redirect to="/" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
