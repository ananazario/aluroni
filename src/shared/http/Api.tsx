import axios from "axios";

const Api = axios.create({
    baseURL: 'https://64418a33792fe886a8aa1a99.mockapi.io/api/v1'
})

export default Api;