import React from 'react';
import ReactDOM from 'react-dom';

const Todo = props => { return (
	<div>
		<input type='text' placeholder='...todo' onChange={this.handleInputChange} />
		<button>Add Todo</button>
		<button>Clear Completed</button>
	</div>
    );};

export default Todo;
