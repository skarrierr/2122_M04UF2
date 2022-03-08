
import React from 'react';
import './Piesito.css';

class Piesito extends React.Component{
	constructor (props){
			super(props);
			 this.state = {
			 contador: 0,
			 fecha: new Date()
			 };
		}

					render(){
						return(
							 setInterval(() => {
							this.setState({
								
							contador: this.state.contador+1,
							fecha: new Date()									
							});
								}, 1000),
		<footer>
		<p>{this.state.fecha.toString()}</p>
		
		<p>Copy(c)La mama de la mama de la mama de la mama de la mama</p>
		<p> </p>
		</footer>
		);
	}
}
export default Piesito;
