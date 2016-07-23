// application entry point
var React = require('react');
var io = require('socket.io-client');
var Header = require('./parts/Header');

var APP = React.createClass({
	// when component mount we want to setup a socket
	componentWillMount() {
		this.socket = io('http://localhost:3001');
		this.socket.on('connect', this.connect);
	},

	connect() {
		alert('connected: ' + this.socket.id);
	},
	render() {
		return (
			<div>
				<Header title="New Header" />
			</div>
		);
	}
});

module.exports = APP;