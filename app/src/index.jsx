import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import appState from './reducers/app-reducer';
import projectState from './reducers/project-reducer';
import App from './app.jsx';

const combinedReducers = combineReducers({
    appState,
    projectState
});

const store = createStore(combinedReducers);

store.subscribe(() => console.log('state', store.getState()));

nativeAPI.initialize()
    .then(() => {

        ReactDOM.render(
            <Provider store={store}>
                <App />
            </Provider>,
            document.getElementById('root')
        );

    })
    .catch(err => {
        console.error(err);
    });
