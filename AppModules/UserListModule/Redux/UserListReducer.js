import {USER_LIST_TYPES} from "./UserListTypes";

const INITIAL_STATE = {
    userList : null,
    repoList : null,
    followersList : null
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case USER_LIST_TYPES.GET_USSR_LIST_SUCCESS :
            return {
                ...state,
                userList:  action.payload
            }
        case USER_LIST_TYPES.GET_USER_REPOS_SUCCESS :
            return {
                ...state,
                repoList: action.payload
            }
        case USER_LIST_TYPES.GET_USER_FOLLOWERS_SUCCESS :
            return {
                ...state,
                followersList: action.payload
            }
        case USER_LIST_TYPES.RESET_ACTION :
            return {
                ...state,
                followersList:  null,
                repoList: null
            }
        default:
            return state;
    }
};
