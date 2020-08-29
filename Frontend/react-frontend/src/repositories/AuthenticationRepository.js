// Third-Party
import axios from 'axios'

import { API_URL } from 'util/PathAPI'

export function loginRepository(data, successCallback, errorCallback) {
    return axios
        .post(API_URL + "/api/v0/login", data)
        .then(successCallback)
        .catch(errorCallback);
}

export function registrationRepository(data, successCallback, errorCallback) {
    return axios
        .post(API_URL + "/api/v0/registration", data)
        .then(successCallback)
        .catch(errorCallback)
}
