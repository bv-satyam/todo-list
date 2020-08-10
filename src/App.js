import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Todos from './todo';
import AddTodos from './addtodo';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import todoReducer from './reducers/todo-reducer';

const store = createStore(todoReducer, applyMiddleware(thunk));

class App extends Component {

	render(){
		return(
			<Provider store={store}>
	    	<div className="container my-3">
					<div className="row">
						<div className="col">
							<AddTodos />
						</div>
						<div className="col">
							List:
							<Todos/>
						</div>
					</div>
	    	</div>
    	</Provider>
 	 );
	}
}

export default App;
