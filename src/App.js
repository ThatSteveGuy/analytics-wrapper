import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Analytics } from './analytics/Analytics';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { setVal } from './reducers';
import Main from './components/Main';

const store = createStore(setVal, { testVal: 9999 });
const initAnalytics = {
  providerKey: null,
  withLogging: true,
  withOptimizely: false,
  active: true
};
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Analytics value={initAnalytics}>
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h1 className="App-title">Analytics Wrapper Strawman</h1>
            </header>
            <p className="App-intro">
              <Main/>
            </p>
          </div>
        </Analytics>
      </Provider>
    );
  }
}

export default App;
