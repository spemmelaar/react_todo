// Keys are the stored status of a 'todo'
// Values are an array consisting of:

// - Position 0: Past tense for wherever the current status of a 'todo' needs to be displayed in the app.
// - Position 1: Future tense for wherever the option to change a 'todo' is given to the user.
// - Position 2: true or false value - true for filtering only in the OutputFilterForm, eg you want to be able to select all todos by using select with value 'all'
//   but you don't want to set an individual todo to have value 'all'.

const todoStates =
	{
		'all' : ['Show All Todos', 'Show All Todos', true],
		'in_progress' : ['In Progress', 'In Progress', false],
		'pending' : ['Pending Action', 'Pending Action', false],
		'completed' : ['Completed', 'Complete', false],
		'deleted' : ['Deleted', 'Delete', false] 
	};

export default todoStates;