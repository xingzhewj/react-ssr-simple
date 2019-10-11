import {combineReducers} from 'redux';
import home from './home';
import about from './about';

const reducers =  combineReducers({
    home,
    about
});

export default reducers;
