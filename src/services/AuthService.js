import axios from 'axios'

const baseUrl = "http://localhost:8080/api/auth"

class AuthService {
    async login(email, password) {
        let response = {status: 400};
        try {
            console.log(baseUrl + "/authenticate")
            response = await axios.post(baseUrl + "/authenticate", {email, password})
            return response
        } catch (e) {
            console.error(e)
        }
    }
}

export default new AuthService()
