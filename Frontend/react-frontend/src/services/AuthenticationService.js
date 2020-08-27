// Third-Party
import axios from 'axios'

// Repository
import { loginRepository, registrationRepository } from 'repositories/AuthenticationRepository';


export function setDataInLocalStorage(username, token) {
        localStorage.setItem('user', username)
        localStorage.setItem('authorization', token)
        localStorage.setItem('isAuth', true)
}

export function removeDataFromLocalStorage() {
        localStorage.removeItem('authorization')
        localStorage.removeItem('user')
        localStorage.removeItem('isAuth')
}

export function loginService(username, password, successCallback, errorCallback) {
        return loginRepository({username, password},
             function (response) {
                 setDataInLocalStorage(username, response.headers['authorization'])
                 successCallback()
             },
             function (error) {
                 errorCallback(error)
             })
}

export function registrationService(username, email, password, successCallback, errorCallback) {
        return registrationRepository({username, email, password},
            function (response) {
                setDataInLocalStorage(username, response.headers['authorization'])
                successCallback()
            },
            function (error) {
                errorCallback(error)
            })
    }

export function logoutService() {
        removeDataFromLocalStorage()
    }
