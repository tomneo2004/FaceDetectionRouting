import {SIGN_IN, SIGN_OUT, REGISTER} from "./constant";

const initialState = {
	isSignin:false
}

export const AppReducer = (state=initialState, action)=>{

	switch(action.type){
		case SIGN_IN:
			return Object.assign({}, state, {isSignin:true});

		case SIGN_OUT:
			return Object.assign({}, state, {isSignin:false});

		case REGISTER:
			return Object.assign({}, state, {isSignin:true});

		default:
			return state;
	}
}