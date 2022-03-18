import React from 'react';
import './App.css';
import Title from './Title';
import Formulario from './Formulario';
import Lista from './Lista';

class App extends React.Component {
 constructor(props){
	 super(props);
 	this.state={
 		tasks: []	
	};

 }

addTask = task => {
	this.state.tasks.push(task);
	this.setState({tasks: this.state.tasks});

	
	
	
}

 render(){
  return (
    <div className="App">
	<Title />
	<Formulario addTask={this.addTask}/>
	<Lista tasks={this.state.tasks}/>
	</div>
  );
 }
}

export default App;
