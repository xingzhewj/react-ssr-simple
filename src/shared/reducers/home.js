import {UPDATE_SEX} from '../actions/home';

const initialState = {
    sex: 'man168'
};

export default function homeReducer(state = initialState, action) {
    switch (action.type) {
        case UPDATE_SEX:
            return {
                ...state,
                ...action.payload
            };
            break;
    
        default:
            return state;
            break;
    }
}
