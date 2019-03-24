import React from 'react';

class Header extends React.Component {
    render() {
        return (
            <h1>
                Todo List
                ({this.props.count})
            </h1>
        )
    }
}

export default Header;
