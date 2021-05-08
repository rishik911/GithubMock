import {USER_LIST_TYPES} from "./UserListTypes";

const INITIAL_STATE = {
    userList : null
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case USER_LIST_TYPES.GET_USSR_LIST_SUCCESS :
            return {
                ...state,
                userList:  action.payload
            }
        default:
            return state;
    }
};
