import axios from 'axios'

const API_URL = "https://apidfx.cloud.wefoundd.com/users/"
//const API_URL = "http://localhost:3000/users/"

class AuthService {
  login(email, password) {
    return axios
      .post(API_URL + 'login', {
        email,
        password
      })
      .then(response => {
        if (response.data.token) {
          localStorage.setItem('user', JSON.stringify(response.data))
        }
        return response.data
      })
  }

  logout() {
    localStorage.removeItem('user')
  }

  register(name, email, password, role) {
    return axios
      .post(API_URL, {
        name,
        email,
        password,
        role
      })
      .then(response => {
        if (response.data.token) {
          localStorage.setItem('user', JSON.stringify(response.data))
        }
        return response.data
      })
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'))
  }
}

export default new AuthService()