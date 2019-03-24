import React from 'react';

class Item extends React.Component {
    render() {
        return (
            <li>
                {
                    this.props.task.status === 1 ?
                        <input type="checkbox" checked onChange={() => {
                            this.props.undo(this.props.task.id)
                        }} />
                    :
                        <input type="checkbox" onChange={() => {
                            this.props.done(this.props.task.id)
                        }} />
                }

                {this.props.task.subject}

                <a href="#" onClick={() => {
                    this.props.remove(this.props.task.id);
                }}>&times;</a>
            </li>
        );
    }
}

export default Item;
