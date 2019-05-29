// you will need a place to store your state in this component.
// design `App` to be the parent component of your application.
// this component is going to take care of state, and any change handlers you need to work with your state

import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Todo from './components/TodoComponents/Todo.js';
// import Todo from './components/TodoComponents/Todo.js';
// import TodoForm from './components/TodoComponents/TodoForm.js';
// import TodoList from './components/TodoComponents/TodoList.js';

class App extends React.Component {
	state = {
		todo : [
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
	render() {
    console.log(this.state.todos)
		return (
			<div className='App'>
				<Todo />
			</div>
		);
	}
}
const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);

export default App;
