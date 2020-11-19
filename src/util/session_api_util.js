import axios from "axios";


//Will set the authToken if someone is logged in
export const setAuthToken = (token) => {
    if (token) {
        axios.defaults.headers.common['Authorization'] = token;
    } else {
        delete axios.defaults.headers.common['Authorization'];
    }
}

export const signup = (userData) => {
    return axios.post('http://localhost:8080/v1/users') // need to grab this from api route to signup a user
}

export const login = (userData) => {
    return axios.post('/') // need to grab this for a login
}

