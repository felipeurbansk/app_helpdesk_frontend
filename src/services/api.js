import axios from 'axios';

let baseUrl = '';

if (window.location.href.indexOf('localhost') !== -1 ){
    baseUrl = 'http://localhost:3333'
} else {
    baseUrl = 'https://app-helpdesk-urbanski.herokuapp.com/'
}

const api = axios.create({
    baseURL: baseUrl
});

export default api;