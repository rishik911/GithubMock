import axios from 'axios';
import {NETWORK_CONSTANTS} from "../Utils/Constants";

export function getUserListNetworkCall(params) {
    return axios.get(NETWORK_CONSTANTS.URL)
}
