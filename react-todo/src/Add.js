import React from 'react';

class Add extends React.Component {
    input = React.createRef();

    render() {
        return (
            <div>
                <input type="text" ref={this.input} />
                <button onClick={() => {
                    let subject = this.input.current.value;
                    this.props.add(subject);
                }}>+</button>
            </div>
        );
    }
}

export default Add;
