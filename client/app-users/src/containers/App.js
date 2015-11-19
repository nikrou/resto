import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Users from '../components/Users';

class App extends Component {
	render() {
	    return (
		<Users names={
			[
			    {
			    'user_id':'admin',
			    'user_superadmin':false,
			    'user_name':null,
			    'user_firstname':null,
			    'user_displayname':null,
			    'entries':168
			    },
			    {
			    'user_id':'bidule',
			    'user_superadmin':false,
			    'user_name':'Chouette',
			    'user_firstname':'Bidule',
			    'user_displayname':'bidibulle',
			    'entries':0,
			    'admin':true
			    },
			    {
			    'user_id':'nicolas',
			    'user_superadmin':true,
			    'user_name':'',
			    'user_firstname':'',
			    'user_displayname':'',
			    'entries':134
			    },
			    {
			    'user_id':'titi',
			    'user_superadmin':false,
			    'user_name':'Titi',
			    'user_firstname':'',
			    'user_displayname':'',
			    'entries':0
			    },
			    {
			    'user_id':'joe',
			    'user_superadmin':false,
			    'user_name':'Joe',
			    'user_firstname':'',
			    'user_displayname':'',
			    'entries':10
			    }
			]
		} />
	    );
	}
}

export default App;
