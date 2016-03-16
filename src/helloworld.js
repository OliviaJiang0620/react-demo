var React = require('react');
var ReactDOM = reqire ('react-dom');
ReactDOM.render(
	React.createElement('h1', null, 'Hello, world!'),
	/*<h1>Hello, world!</h1>,*/
	document.getElementById('example')
	);