import React from 'react';
import User from './User';

class Users extends React.Component
{
    render() {
		const users = this.props.names.map(function(name) {
		    return (<User {name} />)
		});
		return (
		    <table>
		    <caption class="hidden">Liste des utilisateurs</caption>
		    <tbody>
		    {users}
		    </tbody>
		    </table>
		);
    }
}

export default Users;
