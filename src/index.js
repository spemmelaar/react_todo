import React from 'react';
import ReactDOM from 'react-dom';
import TodoListApp from './TodoListApp';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<TodoListApp />, document.getElementById('root'));

registerServiceWorker();
