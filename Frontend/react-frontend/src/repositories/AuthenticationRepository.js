// Third-Party
import axios from 'axios'

const API_URL = "http://localhost:8080"


export default class AuthenticationRepository {
    static loginRepository(data, successCallback, errorCallback) {
        return axios
                .post(API_URL + "/api/v0/login", data)
                .then(successCallback)
                .catch(errorCallback);
    }

    static registrationRepository(data, successCallback, errorCallback) {
        return axios
                .post(API_URL + "/api/v0/registration", data)
                .then(successCallback)
                .catch(errorCallback)
    }
}
