// Third-Party
import axios from 'axios'

// Repository
import AuthenticationRepository from 'repositories/AuthenticationRepository';


const API_URL = "http://localhost:8080"

export default class AuthenticationService {

    static loginService(username, password, successCallback, errorCallback) {
        return AuthenticationRepository.loginRepository({username, password},
             function (response) {
                 localStorage.setItem('authorization', response.headers['authorization'])
                 localStorage.setItem('user', username)
                 localStorage.setItem('isAuth', true)
                 successCallback()
             },
             function (error) {
                 errorCallback(error)
             })
    }

    static logoutService() {
        localStorage.removeItem('authorization')
        localStorage.removeItem('user')
        localStorage.removeItem('isAuth')
    }

    static registrationService(username, email, password) {
        console.log("Registrarion Service ", username, " ", email, " ", password)
    }

    // registration(username, email, password) {
    //     return axios
    //         .post(API_URL + "/registration", {
    //             username,
    //             email,
    //             password
    //         })
    //         .then(response => {
    //             if (response.status === 200) {
    //                 localStorage.setItem('authorization', response.headers['authorization'])
    //                 localStorage.setItem('user', username)
    //                 localStorage.setItem('isAuth', true)
    //             }
    //         })
    // }
}

// export default new AuthenticationService();
