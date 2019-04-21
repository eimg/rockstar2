import React from 'react';

class App extends React.Component {
    state = {
        data: [
            { _id: '1', subject: 'Milk', status: 0 },
            { _id: '2', subject: 'Egg', status: 1 },
        ]
    };

    input = React.createRef();

    componentWillMount() {
        fetch('http://localhost:8000/tasks').then(res => res.json()).then(json => {
            this.setState({
                data: json
            });
        });
    }

    remove = _id => {
        this.setState({
            data: this.state.data.filter(item => item._id !== _id)
        });

        fetch(`http://localhost:8000/tasks/${_id}`, {
            method: 'DELETE'
        });
    };

    add = () => {
        let subject = this.input.current.value;
        fetch('http://localhost:8000/tasks', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ subject })
        }).then(res => res.json()).then(json => {
            this.setState({
                data: [
                    json,
                    ...this.state.data
                ]
            });
        });
    }

    done = _id => {
        this.setState({
            data: this.state.data.map(item => {
                if(item._id === _id) {
                    item.status = 1;
                }

                return item;
            })
        });

        fetch(`http://localhost:8000/tasks/${_id}`, {
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ status: 1 })
        });
    }

    undo = _id => {
        this.setState({
            data: this.state.data.map(item => {
                if(item._id === _id) {
                    item.status = 0;
                }

                return item;
            })
        });

        fetch(`http://localhost:8000/tasks/${_id}`, {
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ status: 0 })
        });
    }

    render() {
        let todo = this.state.data.filter(item => item.status === 0);
        let done = this.state.data.filter(item => item.status === 1);

        return (
            <div>
                <h1>Todo List</h1>
                <ul>
                    {todo.map( item => {
                        return (
                            <li key={item._id}>
                                <input type="checkbox" onChange={() =>{
                                    this.done(item._id);
                                }} />
                                {item.subject}
                                <a href="#" onClick={() => {
                                    this.remove(item._id);
                                }}>&times;</a>
                            </li>
                        )
                    })}
                </ul>
                <hr />
                <ul>
                    {done.map( item => {
                        return (
                            <li key={item._id}>
                                <input type="checkbox" checked onChange={() =>{
                                    this.undo(item._id);
                                }} />
                                {item.subject}
                                <a href="#" onClick={() => {
                                    this.remove(item._id);
                                }}>&times;</a>
                            </li>
                        )
                    })}
                </ul>
                <div>
                    <input type="text" ref={this.input} />
                    <button onClick={this.add}>+</button>
                </div>
            </div>
        )
    }
}

export default App;
