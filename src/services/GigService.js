import axios from 'axios';
import authHeader from './auth-header';

//const API_URL = "https://apidfx.cloud.wefoundd.com/users/"
const API_URL = "http://localhost:3000/gigs/"

class GigService {
  createGig(title, description, ) {
    return axios
      .post(API_URL, {
        name,
        email,
        password,
        role
      },
      {
        headers: authHeader()
      }
  )}


  getPublicContent() {
    return axios.get(API_URL + 'all');
  }

  getUserBoard() {
    return axios.get(API_URL + 'user', { headers: authHeader() });
  }

  getModeratorBoard() {
    return axios.get(API_URL + 'mod', { headers: authHeader() });
  }

  getAdminBoard() {
    return axios.get(API_URL + 'admin', { headers: authHeader() });
  }
}

export default new GigService();