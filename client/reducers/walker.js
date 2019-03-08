import {TEST_ADD} from '../actions/walker';
export function walker(state = {data: 0}, action) {
    const newState = action.type ===  TEST_ADD ? Object.assign(
        {},
        state,
        {
            data: action.payload
        }
    ) : state;
    return newState;
}