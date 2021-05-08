import {combineReducers} from 'redux';
import UserListReducer from '../../AppModules/UserListModule/Redux/UserListReducer'
const appReducer = combineReducers({
  userListState : UserListReducer
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;
