// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import ReactDOM from 'react-dom';

const TodoList = props => { return (
	<div>
		<input type='text' placeholder='...todo' onChange={this.handleInputChange} />
		<button>Add Todo</button>
		<button>Clear Completed</button>
	</div>
    );};

export default TodoList;
