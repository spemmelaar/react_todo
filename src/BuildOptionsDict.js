function buildOptionsDict(modify=true) {

	const modifyOptions = 
	[
		{ 'in_progress' : 'In Progress' },
		{ 'pending' : 'Pending Action' },
		{ 'completed' : 'Complete' },
		{ 'deleted' :'Delete' }
	];

	const displayOptions = 
	[
		{ 'all' : 'Show All To-Dos' },
		{ 'in_progress' : 'In Progress' },
		{ 'pending' : 'Pending Action' },
		{ 'completed' : 'Completed' },
		{ 'deleted' : 'Deleted' }
	];

	if (modify) {
		return modifyOptions;
	}

	return displayOptions;

}

export default buildOptionsDict;