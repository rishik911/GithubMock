import {all, call, put, takeLatest} from 'redux-saga/effects';
import {USER_LIST_TYPES} from "./UserListTypes";
import {getUserFollowersNetworkCall, getUserListNetworkCall, getUserRepoNetworkCall} from "./UserListNetwork";
import {isValidElement} from "../../../MyApp/Utils/helpers";

function* getUserList(){
    try{
        const response=yield call(getUserListNetworkCall)
        if(isValidElement(response) && isValidElement(response.data) && response.data.length > 0){
            yield put({type : USER_LIST_TYPES.GET_USSR_LIST_SUCCESS , payload : response.data})
        }
    }
    catch (e){
        console.log(e)
    }
}
function* getUserRepos(action){
    try {
       if(isValidElement(action.userName)){
           const response = yield call(getUserRepoNetworkCall , action)
           if(isValidElement(response) && isValidElement(response.data)){
               yield put ( {type : USER_LIST_TYPES.GET_USER_REPOS_SUCCESS , payload : response.data})
           }
       }
    }
    catch (e){
        console.log(e)
    }
}
function* getFollowers(action){
    try {
        if(isValidElement(action.userName)){
            const response = yield call(getUserFollowersNetworkCall ,action)
            if(isValidElement(response) && isValidElement(response.data)){
                yield put ({type: USER_LIST_TYPES.GET_USER_FOLLOWERS_SUCCESS , payload : response.data})
            }
        }
    }
    catch (e){
        console.log(e)
    }
}

function* userListSaga() {
    yield all([
        takeLatest(USER_LIST_TYPES.GET_USER_LIST , getUserList),
        takeLatest(USER_LIST_TYPES.GET_USER_REPOS, getUserRepos),
        takeLatest(USER_LIST_TYPES.GET_USER_FOLLOWERS , getFollowers)
    ]);
}

export default userListSaga;
