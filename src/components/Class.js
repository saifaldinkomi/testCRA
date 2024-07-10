import React, { Component } from 'react';
class Class extends Component {
    render() {
        const { name,message } = this.props;
        return (
            <div>
                <h2>my name: {name}</h2>
                <h2>Massage is: {message}</h2>
            </div>
        );
    }
}

export default Class;