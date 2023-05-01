import axios from "axios";

const apiCodeBurger = axios.create({
    baseURL: 'http://localhost:3001'

})

apiCodeBurger.interceptors.request.use(async config => {
    const userData = await localStorage.getItem('codeburger:userDate')
    const token = userData && JSON.parse(userData).token
    config.headers.Authorization = 'Barer ' + token
    return config

  
})
export default apiCodeBurger