import { createStore } from "redux";
import AuthService from "./AuthService";

const authService = new AuthService();
const initialState = {
    auth : authService,
    user: null
}

function reducer(state = initialState, action){
    let newState = state;
    switch(action.type){
        case 'LOGIN':
            newState.user = action.data;
            return newState;
        case 'LOGOUT':
            newState.user = null;
            return newState;
        default:
            return state;
    }
}

let store = createStore(reducer);


export default store;