import axios from "axios";

const instance = axios.create({
    baseURL: 'http://api.apixu.com/v1/'
})

export default instance;