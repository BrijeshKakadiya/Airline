import { BASE_URL, environment } from '../../environment/environment';
import { handler } from "./index"

const createFlight = async (data) => {
    console.log("createFlight => ", data);
    var url = BASE_URL + environment.CREATE_FLIGHT;
    return handler.Post(url, data).then(res => {
        return res
    })
}
// async function createFlight(data) {
//     console.log("registerUser => ", data);
//     var url = BASE_URL + environment.REGISTER_USER;
//     return handler.Post(url, data).then(res => {
//         return res
//     })
// }

const deleteFlightById = async (id) => {
    console.log("id => ", id);
    var url = BASE_URL + environment.DELETE_FLIGHT_BY_ID + id;
    return handler.Post(url).then(res => {
        return res
    })
}

const getAllFlights = async () => {
    console.log("getttt")
    var url = BASE_URL + environment.GET_ALL_FLIGHTS;
    return handler.Get(url).then(res => {
        return res
    })
}

export {
    createFlight,
    getAllFlights,
    deleteFlightById,
};