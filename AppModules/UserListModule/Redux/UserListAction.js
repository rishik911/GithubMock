import {USER_LIST_TYPES} from "./UserListTypes";

export const getUserListAction = ()=> {
    return{
        type : USER_LIST_TYPES.GET_USER_LIST
    }
}
export const getUserRepoAction = (userName) =>{
    return{
        type : USER_LIST_TYPES.GET_USER_REPOS,
        userName
    }
}

export const getUserFollowersAction = (userName)=>{
    return{
        type : USER_LIST_TYPES.GET_USER_FOLLOWERS,
        userName
    }
}

export const resetAction=()=>{
    return{
        type : USER_LIST_TYPES.RESET_ACTION

    }
}
