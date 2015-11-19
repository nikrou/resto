import React from 'react';
import User from './User';

class Users extends React.Component
{
    render() {
	const users = this.props.names.map(function(name) {
	    return (<User user={name} />)
	});

	return (
	    <div className="table-outer clear">
		<table>
		    <caption className="hidden">Liste des utilisateurs</caption>
		    <tbody>
			<tr>
			    <th colSpan="2" scope="col" className="first">Identifiant</th>
			    <th scope="col">Prénom</th>
			    <th scope="col">Nom</th>
			    <th scope="col">Pseudonyme</th>
			    <th scope="col" className="nowrap">Entrées</th>
			</tr>
			{users}
		    </tbody>
		</table>
	    </div>
	);
    }
}

export default Users;
