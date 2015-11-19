import React from 'react';

class Hello extends React.Component
{
    render() {
		const hellos = this.props.names.map(function(name) {
		    return (<h4>Hello {name.user_id}!</h4>)
		});
		return (
		    <div>
		    {hellos}
		    </div>
		);
    }
}

export default Hello;
