import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Hello from '../components/Hello';

class App extends Component {
	render() {
		return (<Hello username="Master" />);
	}
}

export default App;
