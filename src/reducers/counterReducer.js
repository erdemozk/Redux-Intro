import { 
    INCREASE_COUNTER,
    DECREASE_COUNTER,
    INCREASE_BY_TWO_COUNTER
} from "../actions/actionTypes";

const initialState = 0

const counterReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case INCREASE_COUNTER:
            return (newState = state + action.payload);
        
        case DECREASE_COUNTER:
            return (newState = state - action.payload);
        
        case INCREASE_BY_TWO_COUNTER:
            return (newState = state + action.payload);
    
        default:
            return state;
    }
};

export default counterReducer;