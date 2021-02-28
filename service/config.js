import axios from 'axios'
// axios.defaults.withCredentails = true
const myPlatformService = axios.create({
    // baseURL: "http://localhost:4000",
    baseURL: "http://www.meibugs.com:4000",
    timeout: 5000,
    withCredentials: true,
    headers: {
        'X-Requested-With': 'XMLHttpRequest'
    }
})
export default myPlatformService;