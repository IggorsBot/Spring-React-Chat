// Third-Party
import axios from 'axios'

// Repository
import AuthenticationRepository from 'repositories/AuthenticationRepository';


const API_URL = "http://localhost:8080"

export default class AuthenticationService {

    static setDataInLocalStorage(username, token) {
        localStorage.setItem('authorization', token)
        localStorage.setItem('user', username)
        localStorage.setItem('isAuth', true)
    }

    static removeDataFromLocalStorage() {
        localStorage.removeItem('authorization')
        localStorage.removeItem('user')
        localStorage.removeItem('isAuth')
    }

    static loginService(username, password, successCallback, errorCallback) {
        return AuthenticationRepository.loginRepository(
            {username, password},
             function (response) {
                 AuthenticationService.setDataInLocalStorage(username, response.headers['authorization'])
                 successCallback()
             },
             function (error) {
                 errorCallback(error)
             })
    }

    static registrationService(username, email, password, successCallback, errorCallback) {
        return AuthenticationRepository.registrationRepository(
            {username, email, password},
            function (response) {
                AuthenticationService.setDataInLocalStorage(username, response.headers['authorization'])
                successCallback()
            },
            function (error) {
                errorCallback(error)
            })
    }

    static logoutService() {
        AuthenticationService.removeDataFromLocalStorage()
    }
}
