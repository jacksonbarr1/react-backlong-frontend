import axios from 'axios'

const baseUrl = "http://localhost:8080/api/auth"

class AuthService {

    async register(email, username, password) {
        try {
            return await axios.post(baseUrl + "/register", {email, username, password})
        } catch (e) {
            console.error(e)
        }
    }

    async login(email, password) {
        try {
            return await axios.post(baseUrl + "/authenticate", {email, password})
        } catch (e) {
            console.error(e)
        }
    }
}

export default new AuthService()
