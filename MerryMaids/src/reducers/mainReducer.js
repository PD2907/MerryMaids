import { combineReducers } from "redux";
import  signInReducer from '../components/signInComponent/signInReducer'

export default combineReducers({
    signInReducer : signInReducer
});