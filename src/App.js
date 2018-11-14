import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { AnalyticsProvider } from './analytics/Analytics';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { setVal } from './reducers';
import Main from './components/Main';
import Alt from './components/Alt';
import { Route, Switch } from 'react-router';
import { NavLink, BrowserRouter } from 'react-router-dom';
import config from './config';

const store = createStore(setVal, { testVal: 9999 });
const { analytics } = config;
// const history = createHistory();

const analyticsConfig = {
  apiKey: analytics.apiKey,
  withLogging: analytics.withLogging,
  withABTesting: analytics.withABTesting,
  active: analytics.active,
  deviceId: analytics.deviceId
};

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <AnalyticsProvider value={analyticsConfig}>
            <div className="App">
              <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1 className="App-title">Analytics Wrapper Strawman</h1>
              </header>
              <div className="App-intro">
                <Switch>
                  <Route exact path="/" component={Main} />
                  <Route path="/alt" component={Alt} />
                </Switch>
              </div>
              <div className="navigation">
                <NavLink className='button' to='/'> Main </NavLink>
                <NavLink className='button' to='/Alt'> Alt </NavLink>
              </div>
            </div>
            </AnalyticsProvider>
          </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
