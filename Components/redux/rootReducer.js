import {combineReducers} from 'redux';
import reducer from './reducer';
/*
    1) if we have more then one reducer in redux then we have to use combineReducers.
    2) If we have only one reducer in redux then it is good practices to write combineReducers.
    import userReducer from './userReducer';
*/

export default combineReducers({
    reducer,
    // userReducer, and so on... if we have more reducer in your App. 
})