import { BASE_URL, environment } from '../../environment/environment';
import { handler } from "../services/index"

function registerUser(data) {
    console.log("registerUser => ", data);
    var url = BASE_URL + environment.REGISTER_USER;
    return handler.Post(url, data).then(res => {
        return res
    })
}

function loginUser(data) {
    console.log("loginUser => ", data);
    var url = BASE_URL + environment.USER_LOGIN;
    return handler.Post(url, data).then(res => {
        return res
    })
}

const deleteUserById = async (id) => {
    var url = BASE_URL + environment.DELETE_USER_BY_ID + id;
    return handler.Post(url).then(res => {
        return res
    })
}

const getAllUser = async () => {
    var url = BASE_URL + environment.GET_ALL_USER;
    return handler.Get(url).then(res => {
        return res
    })
}

export {
    registerUser,
    loginUser,
    getAllUser,
    deleteUserById
};