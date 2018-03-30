import * as constants from './constants';


export function reducer(state = [], action ) {
	
    switch(action.type) {
        case constants.INITIAL_FRIEND_LIST:
            return action.data;

        default:
            return state;
    }
}
