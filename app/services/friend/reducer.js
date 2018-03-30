export function reducer(state = {}, action ) {
    switch(action.type) {
        case 'INITIAL':
            return action;

        default:
            return state;
    }
}
