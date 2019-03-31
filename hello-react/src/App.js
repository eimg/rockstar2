import React from 'react';
import List from './List';
import Add from './Add';

import { createStore } from 'redux';

var store = createStore((state = [], action) => {
    if(action.type === 'add') state = [ ...state, action.value ];
    return state;
});

store.dispatch({ type: 'add', value: 'xxx' });
store.dispatch({ type: 'add', value: 'zzz' });

class App extends React.Component {
    add = (name) => {
        store.dispatch({ type: 'add', value: name });
        this.forceUpdate();
    }

    remove = (name) => {
        this.forceUpdate();
    }

    render() {
        var data = store.getState();
        return (
            <div>
                <List data={data} remove={this.remove} />
                <Add add={this.add} />
            </div>
        )
    }
}

export default App;
