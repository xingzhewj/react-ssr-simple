import {ABOUT_MESSAGE} from '../actions/about';

const initialState = {
    message: 'about message notice!'
};

export default function aboutReducer(state = initialState, action) {
    switch (action.type) {
        case ABOUT_MESSAGE:
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
