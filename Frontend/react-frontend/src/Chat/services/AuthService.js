// Third-Party
import axios from 'axios'

const API_URL = "http://localhost:8080"

class AuthService {

    login(username, password) {
        return axios
            .post(API_URL + "/login", {
                username,
                password
            })
            .then(response =>  {
                if (response.status === 200) {
                    localStorage.setItem('authorization', response.headers['authorization'])
                    localStorage.setItem('user', username)
                    localStorage.setItem('isAuth', true)
                }
            })
    }

    logout(username, password) {
        localStorage.removeItem('authorization')
        localStorage.removeItem('user')
        localStorage.removeItem('isAuth')
    }
}

export default new AuthService();
