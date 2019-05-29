import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import MainPage from './components/main-page';
import rootReducer from './reducers';
import { BrowserRouter } from 'react-router-dom';
import './App.css';

// import {library} from '@fortawesome/fontawesome-svg-core';
// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
// import {} from '@fortawesome/free-solid-svg-icons';
// library.add();

const store = createStore(rootReducer);

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <MainPage />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
