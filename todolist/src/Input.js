import React from 'react';
import TextField from '@mui/material/TextField';

class Input extends React.Component{
	constructor(props){
		super(props);
		this.state = {
		value: props.value
		};
	}

	handleChange = (event) => {
 		this.props.handleChange(event);
		this.setState({ value: event.target.value});
	}


	render(){
		let l = this.state.value.length;
		return(
		<TextField label="Tarea" onChange={this.handleChange} value={this.props.value}/>
		);

  	}	


}

export default Input;
