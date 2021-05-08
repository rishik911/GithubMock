import axios from 'axios';
import {NETWORK_CONSTANTS} from "../Utils/Constants";

export function getUserListNetworkCall(params) {
    return axios.get(NETWORK_CONSTANTS.URL)
}

export function getUserRepoNetworkCall(params) {
    return axios.get(NETWORK_CONSTANTS.REPO_URL + params.userName + '/repos')
}

export function getUserFollowersNetworkCall(params) {
    return axios.get(NETWORK_CONSTANTS.FOLLOWERS_URL + params.userName + '/followers')
}
