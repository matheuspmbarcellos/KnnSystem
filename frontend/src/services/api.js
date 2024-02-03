import axios from 'axios';

export const api = new axios.create({
    baseURL: 'http://localhost:8080',   
    headers: {
        'Authorization': `Bearer ${localStorage.getItem("@Auth:token")}` || ''
    } 
})
