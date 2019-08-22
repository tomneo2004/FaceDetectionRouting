import React from "react";
import {Link} from "react-router-dom";
import {connect} from 'react-redux';
import {SignoutAction} from '../../Containers/MainApp/actions';

const mapStateToProps = (state)=>({

	isSignin: state.isSignin
});

const mapDispatchToProps = (dispatch)=>{

	return {

		onSignout: ()=>dispatch(SignoutAction())
	}
}

const Navigation = (props)=>{

	const {isSignin, onSignout} = props;
	return(

		<div style={{display:"flex", justifyContent:"flex-end"}}>
		{
			//if user sign in then show sign out button
			//otherwise show sign in and register buttons
			//We use Link to do routing 
			isSignin?
			<p onClick={onSignout}  className="f3 link dim black underline pa3 pointer">Sign Out</p>
			:
			<div>
				<p className="f3 pa3 dib">
					<Link to='/Signin' className="f3 link dim black underline pa3 pointer">Sign in</Link>
				</p>
				<p className="f3 pa3 dib">
					<Link to='/Register' className="f3 link dim black underline pa3 pointer">Register</Link>
				</p>
			</div>
		}
		</div>
	);
}

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);