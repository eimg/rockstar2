import React from 'react';
import List from './List';
import Add from './Add';

class App extends React.Component {
    constructor() {
        super();
        this.state = { data: ['a', 'b'] }
        this.add = this.add.bind(this);
        this.remove = this.remove.bind(this);
    }

    add(name) {
        this.setState({
            data: [ ...this.state.data, name ]
        });
    }

    remove(name) {
        this.setState({
            data: this.state.data.filter(item => item != name)
        })
    }

    render() {
        return (
            <div>
                <List data={this.state.data} remove={this.remove} />
                <Add add={this.add} />
            </div>
        )
    }
}

export default App;
