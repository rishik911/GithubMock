import {all} from 'redux-saga/effects';
import userListSaga from '../../AppModules/UserListModule/Redux/UserListSaga'
export default function* IndexSaga() {
  yield all([userListSaga()]);
}
