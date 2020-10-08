import { createStore, combineReducers } from "redux";
import counterReducer from "./reducers/counterReducer";

const rootReducer = combineReducers({
    counter: counterReducer
});

const configureStore = () => createStore(rootReducer);

export default configureStore;