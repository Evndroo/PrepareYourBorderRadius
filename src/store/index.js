import { createStore } from "redux"

const INITIAL_STATE= {
    top_left:0,
    top_right:0,
    bottom_left:0,
    bottom_right:0
}


const reducer = (state = INITIAL_STATE, action)=>{
    switch(action.type){
        case "SET-TOP-LEFT":
            return {...state, top_left: action.value};
        case "SET_TOP_RIGHT":
            return {...state, top_right: action.value};
        case "SET_BOTTOM_LEFT":
            return {...state, bottom_left :action.value};
        case "SET_BOTTOM_RIGHT":
            return {...state, bottom_right :action.value};
        default:
            return state;
    }
}

const store = createStore(reducer);


export default store