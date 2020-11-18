import { combineReducers } from 'redux';
import session from "./session_reducer";
import errors from "./errors_reducer";

//syntantic sugar for:
// errors: errors
const RootReducer = combineReducers({
    errors,
    session
})

export default RootReducer;