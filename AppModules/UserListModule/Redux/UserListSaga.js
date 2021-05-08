import {all, call, put, takeLatest} from 'redux-saga/effects';
import {USER_LIST_TYPES} from "./UserListTypes";
import {getUserListNetworkCall} from "./UserListNetwork";
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

function* userListSaga() {
    yield all([
        takeLatest(USER_LIST_TYPES.GET_USER_LIST , getUserList)
    ]);
}

export default userListSaga;
