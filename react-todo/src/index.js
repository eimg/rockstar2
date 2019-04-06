import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

var autoID = 0;

var store = createStore((state = [], action) => {
    switch(action.type) {
        case 'ADD': return [{ id: ++autoID, subject: action.subject, status: 0 }, ...state ];
            break;
        case 'DEL':
            return state.filter(item => item.id !== action.id);
            break;
        case 'DONE':
            return state.map(item => {
                if(item.id === action.id) item.status = 1;
                return item;
            });
            break;
        case 'UNDO':
            return state.map(item => {
                if(item.id === action.id) item.status = 0;
                return item;
            });
            break;
        case 'CLEAR':
            return state.filter(item => item.status === 0);
            break;
        default:
            return state;
    }
});

store.dispatch({ type: 'ADD', subject: 'Milk' });
store.dispatch({ type: 'ADD', subject: 'Bread' });
store.dispatch({ type: 'ADD', subject: 'Butter' });
store.dispatch({ type: 'ADD', subject: 'Egg' });
store.dispatch({ type: 'DONE', id: 3 });
store.dispatch({ type: 'DONE', id: 4 });

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
