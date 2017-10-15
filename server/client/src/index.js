import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import reduxThunk from 'redux-thunk';
import { AUTH_USER } from './actions/types';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = createStoreWithMiddleware(reducers);

// Auto authentication of returning user

// If user has a JWT token, consider the user to be signed in
const token = localStorage.getItem('token');

if (token) {
	store.dispatch({ type: AUTH_USER })
}

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
