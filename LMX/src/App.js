import React,{ Fragment} from 'react';
import{ GlobalStyle } from './style/style.js';

import Home from './components/Pages/Home/Home.js';

import Middle from './components/Pages/Home/Middle/Middle.js';
import Last from './components/Pages/Home/Last/Last.js';

import Headers from './components/Pages/Headers/Headers.js';
import { Provider } from 'react-redux';
import store from './store';
import {BrowserRouter ,Route} from 'react-router-dom';

class App extends React.Component {
  render(){
    return (
      <Fragment>
        <Provider store={store}>
        <GlobalStyle/>
          <BrowserRouter>
            <Headers/>
              <Route path={'/'}exact component={Home}/>
              <Route path={'/Home'}exact component={Home}/>
              <Route path={'/Middle'}exact component={Middle}/>
              <Route path={'/Last'}exact component={Last}/>
          </BrowserRouter>
        </Provider>
      </Fragment>
    )
  }
}
export default App;
