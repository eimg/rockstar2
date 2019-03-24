import React from 'react';

const Add = props => {
    let input = React.createRef();

    return (
        <div>
            <input type="text" ref={input} />
            <button onClick={() => {
                props.add(
                    input.current.value
                );
            }}>+</button>
        </div>
    )
}

export default Add;
