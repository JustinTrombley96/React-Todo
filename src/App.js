// you will need a place to store your state in this component.
// design `App` to be the parent component of your application.
// this component is going to take care of state, and any change handlers you need to work with your state

import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ReactDOM from 'react-dom';
import './App.css';
import Todos from './components/TodoComponents/Todos.js';
import Header from './components/layout/Header.js';
import AddTodo from './components/TodoComponents/AddTodo.js';
import About from './components/pages/About.js';
// import uuid from 'uuid';
import axios from 'axios';

// import Todo from './components/TodoComponents/Todo.js';
// import TodoForm from './components/TodoComponents/TodoForm.js';
// import TodoList from './components/TodoComponents/TodoList.js';

class App extends React.Component {
	state = {
		todos : [],
	};

	componentDidMount() {
		axios
			.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
			.then(res => this.setState({ todos: res.data }));
	}
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
		axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`).then(res =>
			this.setState({
				todos : [ ...this.state.todos.filter(todo => todo.id !== id) ],
			}),
		);
	};

	//Add Todo
	addTodo = title => {
		// const newTodo = {
		// id        : uuid.v4(),
		// title,
		// completed : false,
		axios
			.post('https://jsonplaceholder.typicode.com/todos', {
				title,
				completed : false,
			})
			.then(res =>
				this.setState({
					todos : [ ...this.state.todos, res.data ],
				}),
			);
		// this.setState({
		// 	todos : [ ...this.state.todos, newTodo ],
	};
	render() {
		return (
			<Router>
				<div className='App'>
					<div className='container'>
						<Header />
						<Route
							exact
							path='/'
							render={props => (
								<React.Fragment>
									<AddTodo addTodo={this.addTodo} />
									<Todos
										todos={this.state.todos}
										markComplete={this.markComplete}
										delTodo={this.delTodo}
									/>
								</React.Fragment>
							)}
						/>
						<Route path='/about' component={About} />
					</div>
				</div>
			</Router>
		);
	}
}
const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);

export default App;
