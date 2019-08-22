import React, {Component} from 'react';
import Navigation from "../../Components/Navigation/Navigation";
import FaceDetectionApp from "../../Containers/FaceDetectionApp/FaceDetectionApp";
import Signin from "../../Components/Signin/Signin";
import Register from "../../Components/Register/Register";
import NotFound404 from "../../Components/NotFound404/NotFound404";


import './App.css';
import Particles from 'react-particles-js';
import {BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import {connect} from 'react-redux';


const particleOptions = {

	particles:{
		number:{
			value: 100,
			density:{
				enable:true,
				value_area:800
			}
		}
	}
}

const mapStateToProps = (state)=>({

	isSignin:state.isSignin
});



class App extends Component {

	

	render(){

	  	return (
	  		
  			
			    <div>
			    	<Particles className="particles" 
			              params={particleOptions}
			        />
			        <Navigation />

			    	{
			    		//if user sign in then go to route face detection app
			    		//otherwise go to sign
			    		this.props.isSignin ?
			    		<Redirect to='/' />
			    		:
			    		<Redirect to='/Signin' />
			    	}
			        
			        {
			        	
			           	/*
			           	Main app use redux and react-redux to track
			           	user login in state while face detection app
			           	use react state
			           	*/
			       	}
			       	{
			       		/*All routes is define in main app

			           	Face detection is another app under main app*/
			       	}
			        <Switch>{/*Routes define and Switch is just a way to group routes*/}
			        	<Route exact={true} path="/" component={FaceDetectionApp} />
			     		<Route path="/Signin" component={Signin} />
			     		<Route path="/Register" component={Register} />
			     		<Route path="*" component={NotFound404} />
			     	</Switch>

			    </div>
		    

	 	 );
	}
}

export default connect(mapStateToProps)(App);
