import React from 'react';

class Hello extends React.Component
{
    render() {
		return (
		    <h4>Hello {this.props.username}!</h4>
		);
    }
}

export default Hello;
