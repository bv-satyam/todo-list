import React,{Component} from 'react';
import {connect} from 'react-redux';
import { addTodo } from './actions/todo-action';

class AddTodos extends Component{  
	state={
		'name': null   
	}
	
	handleChange=(e)=>{ this.setState({['name']:e.target.value})}
	
	handleSubmit=(e)=>{
		e.preventDefault();
		this.props.addTodo(this.state);         
		document.querySelector('form').reset();     
	}

	render(){ 
		return(  
			<div>    
				<form onSubmit={this.handleSubmit}>     
					<label htmlFor="item"></label>     
					<input type="text" placeholder="Add a todo…" id="item" onChange={this.handleChange}/>     
					<button className="btn btn-add">Add</button>   
				</form>  
			</div>  
		)}
}

export default connect(null, {addTodo})(AddTodos);
