import React, {Component} from 'react';

class User extends Component
{
    render() {
		return (
			<tr className="line">
			    <td className="nowrap"><input type="checkbox" name="users[]" value="{this.props.user.user_id}" /></td>
			    <td className="maximal" scope="row"><a href={'user.php?id='+this.props.user.user_id}>{this.props.user.user_id}</a>&nbsp;</td>
			    <td className="nowrap">{this.props.user.user_firstname}</td>
			    <td className="nowrap">{this.props.user.user_name}</td>
			    <td className="nowrap">{this.props.user.user_displayname}</td>
			    <td className="nowrap count"><a href={'posts.php?user_id='+this.props.user.user_id}>{this.props.user.entries}</a></td>
			</tr>
		);
    }
}

export default User;
