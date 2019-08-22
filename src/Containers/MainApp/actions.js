import {SIGN_IN, SIGN_OUT, REGISTER} from "./constant";

export const SigninAction = (email, password)=>{
	return{
		type: SIGN_IN,
		payload: {email:email, password:password}
	}
}

export const RegisterAction = (name, email, password)=>{
	return{
		type: REGISTER,
		payload: {name:name, email:email, password:password}
	}
}

export const SignoutAction = ()=>{
	return{
		type: SIGN_OUT,
		payload: ""
	}
}