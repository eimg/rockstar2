var createStore = require('redux').createStore;

var store = createStore((state = [], action) => {
    if(action.type === 'add') {
        state = [
            ...state,
            action.value
        ]
    }

    return state;
});

store.subscribe(() => {
    console.log( store.getState() );
});

store.dispatch({ type: 'add', value: 'xxx' });
store.dispatch({ type: 'add', value: 'zzz' });
