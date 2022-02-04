import { createStore } from "redux";
import AuthService from "./AuthService";

const authService = new AuthService();
const today = new Date();
const initialState = {
    auth : authService,
    user: null,
    date: {
        y: today.getFullYear(),
        m: today.getMonth() + 1,
        d: today.getDate()
    },
    diary_date: {
        y: today.getFullYear(),
        m: today.getMonth() + 1,
        d: today.getDate()
    }
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
        case 'MOVE_NEXT_MONTH':
            newState.date.m++;
            if(newState.date.m>12){ newState.date.y++; newState.date.m=1; }
            return newState;
        case 'MOVE_PAST_MONTH':
            newState.date.m--;
            if(newState.date.m<1){ newState.date.y--; newState.date.m=12;}
            return newState;
        case 'SELECT_DIARY_DATE':
            console.log({...newState, diary_date: action.data});
            return {...newState, diary_date: action.data}
        default:
            return state;
    }
}

let store = createStore(reducer);


export default store;