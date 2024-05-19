import { BASE_URL, environment } from '../../environment/environment';
import { handler } from "../services/index"

function registerUser(data) {
    console.log("data => ", data);
    var url = BASE_URL + environment.REGISTER_USER;
    return handler.Post(url, data).then(res => {
        return res
    })
}
function loginUser(data) {
    var url = BASE_URL + environment.USER_LOGIN;
    return handler.Post(url, data).then(res => {
        return res
    })
}

export {
    registerUser,
    loginUser,
};