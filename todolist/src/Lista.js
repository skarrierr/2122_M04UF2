import React from 'react';
import Item from './Item';
import List from '@mui/material/List';
class Lista extends React.Component
{
	constructor(props){
		super(props);
		this.state = {
			tasks : props.tasks 
		};
		
	}
	render()
	{
		let t = this.state.tasks;	
		let tasks = [];
		for (let i = 0; i < t.length; i++){
			tasks.push(<Item task={t[i]} key={i} id_task={i}
			remove={this.props.remove} />);
		}

		return (
			<List>
				{tasks}	
			</List>
		);
	}
}
export default Lista;
