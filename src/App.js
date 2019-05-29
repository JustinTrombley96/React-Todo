// you will need a place to store your state in this component.
// design `App` to be the parent component of your application.
// this component is going to take care of state, and any change handlers you need to work with your state

import React from 'react';
import ReactDOM from 'react-dom';
import Todo from './components/TodoComponents/Todo.js';
import TodoForm from './components/TodoComponents/TodoForm.js';
import TodoList from './components/TodoComponents/TodoList.js';

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			task : 'asd',
		};
	}

	handleInputChange = event => {
		this.setState({ task: event.target.value });
	};

	render() {
		return (
			<div>
				<h2>Todo List: MVP</h2>
				<Todo />
				<TodoList />
				<TodoForm />
			</div>
		);
	}
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);


export default App;
