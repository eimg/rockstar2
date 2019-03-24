import React from 'react';
import Header from './Header';
import Todo from './Todo';
import Done from './Done';
import Add from './Add';

class App extends React.Component {
    autoid = 4;

    state = {
        tasks: [
            { id: 1, subject: "Milk", status: 0 },
            { id: 2, subject: "Bread", status: 1 },
            { id: 3, subject: "Apple", status: 0 },
            { id: 4, subject: "Butter", status: 1 },
        ]
    }

    add = subject => {
        let newTask = { id: ++this.autoid, subject, status: 0 };

        this.setState({
            tasks: [
                ...this.state.tasks,
                newTask
            ]
        })
    }

    remove = id => {
        this.setState({
            tasks: this.state.tasks.filter(item => item.id !== id)
        });
    }

    done = id => {
        this.setState({
            tasks: this.state.tasks.map(item => {
                if(item.id === id) item.status = 1;
                return item;
            })
        })
    }

    undo = id => {
        this.setState({
            tasks: this.state.tasks.map(item => {
                if(item.id === id) item.status = 0;
                return item;
            })
        })
    }

    clear = id => {
        this.setState({
            tasks: this.state.tasks.filter(item => item.status === 0)
        })
    }

    render() {
        return (
            <div>
                <Header count={this.state.tasks.filter(task => {
                    return task.status === 0;
                }).length} />

                <Add />

                <Todo
                    done={this.done}
                    remove={this.remove}
                    tasks={this.state.tasks.filter(task => {
                        return task.status === 0;
                    })}
                />

                <hr />

                <Done
                    undo={this.undo}
                    remove={this.remove}
                    tasks={this.state.tasks.filter(task => {
                        return task.status === 1;
                    })}
                />

                <a href="#" onClick={this.clear}>Clear all done</a>
            </div>
        );
    }
}

export default App;
