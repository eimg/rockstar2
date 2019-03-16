import React from 'react';

class Add extends React.Component {
    constructor() {
        super();

        this.input = React.createRef();
    }

    render() {
        return (
            <div>
                <input type="text" ref={this.input} />
                <button onClick={() => {
                    var name = this.input.current.value;
                    this.props.add(name);
                }}>Button</button>
            </div>
        )
    }
}

export default Add;
