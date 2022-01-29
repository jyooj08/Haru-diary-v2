import { createStore } from "redux";

const initialState = {
    user: null
}

function reducer(state = initialState, action){
    switch(action.type){
        case 'LOGIN':
            return {user: action.data}
        default:
            return state;
    }
}

let store = createStore(reducer);


export default store;