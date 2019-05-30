// you will need a place to store your state in this component.
// design `App` to be the parent component of your application.
// this component is going to take care of state, and any change handlers you need to work with your state

import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Todos from './components/TodoComponents/Todos.js';
import Header from './components/layout/Header.js';
import AddTodo from './components/TodoComponents/AddTodo.js';

// import Todo from './components/TodoComponents/Todo.js';
// import TodoForm from './components/TodoComponents/TodoForm.js';
// import TodoList from './components/TodoComponents/TodoList.js';

class App extends React.Component {
	state = {
		todos : [
			{
				id        : 1,
				title     : 'Take out the trash',
				completed : false,
			},
			{
				id        : 2,
				title     : 'Movies with son',
				completed : false,
			},
			{
				id        : 3,
				title     : 'Walk the dog',
				completed : false,
			},
		],
	};
	//Toggle Complete
	markComplete = id => {
		this.setState({
			todo : this.state.todos.map(todo => {
				if (todo.id === id) {
					todo.completed = !todo.completed;
				}
				return todo;
			}),
		});
	};

	//Delete Todo
	delTodo = id => {
		this.setState({
			todos : [ ...this.state.todos.filter(todo => todo.id !== id) ],
		});
	};
	render() {
		return (
			<div className='App'>
				<div className='container'>
					<Header />
					<AddTodo />
					<Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo} />
				</div>
			</div>
		);
	}
}
const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);

export default App;
