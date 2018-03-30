import { combineReducers } from 'redux';
import { reducer as friendReducer } from 'services/friend/reducer';

export default combineReducers({
    friendReducer: friendReducer
});

