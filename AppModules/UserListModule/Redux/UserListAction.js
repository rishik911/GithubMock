import {USER_LIST_TYPES} from "./UserListTypes";

export const getUserListAction = ()=> {
    return{
        type : USER_LIST_TYPES.GET_USER_LIST
    }
}
