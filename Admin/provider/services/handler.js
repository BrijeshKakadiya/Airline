import axios from 'axios';
import {Constant}  from '../services/common/constant'

export const handler = {
    Post, Get
};

function Post(URL, Parameter) {
    var Token = localStorage.getItem(Constant.JWT_TOKEN);
    return axios.post(URL, Parameter, {
        headers: { 'Authorization': Token }
    }).then(response => {
        if (!response.statusText === "OK") {
            const error = response.statusText;
            return Promise.reject(error);
        }
        return response.data
    })
}
function Get(URL) {
    var Token = localStorage.getItem(Constant.JWT_TOKEN);
    return axios.get(URL, {
        headers: { 'Authorization': Token }
    }).then(response => {
        if (!response.statusText === "OK") {
            const error = response.statusText;
            return Promise.reject(error);
        }
        return response.data
    })
}