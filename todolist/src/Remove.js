import React from 'react';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

class Remove extends React.Component
{
	constructor (props){
		super(props);

		this.state = {
			open: false
		}
	}
	openDialog = () => {
		this.state.open = true;
		this.setState({
			open: this.state.open
		});
	};
	
	closeDialog = () => {
		this.state.open = false;
		this.setState({
			open: this.state.open
		});
	};

	remove = () => {
		this.props.remove(this.props.id_task);
		this.closeDialog();
	};

	render(){
		return (
		<div>
		<Button startIcon={<DeleteIcon />} onClick={this.openDialog}>BORRAR</Button>
		<Dialog open={this.state.open} onClose={this.closeDialog}>
		<DialogTitle>Borrar tarea</DialogTitle>
		<DialogContent>
		<DialogContentText>
			¿Quieres borrar esta tarea?
		</DialogContentText>
		</DialogContent>
		<DialogActions>
		<Button onClick={this.closeDialog}>No</Button>
		<Button startIcon={<DeleteIcon />} variant="contained" color="error" onClick={this.removeTask}>Sí</Button>
		</DialogActions>
		</Dialog>
		</div>
		);
	}
}

export default Remove;

	




