export const environment = {
    /**User**/
    USER_LOGIN: '/user/loginUser',
    REGISTER_USER: '/user/registerUser',
    GET_ALL_USER: '/user/getAllUsers',
    DELETE_USER_BY_ID: '/user/deleteUserById/:Id',

    /**Flight**/
    CREATE_FLIGHT: '/flight/createFlight',
    GET_ALL_FLIGHTS: '/flight/getAllFlights',
    DELETE_FLIGHT_BY_ID: '/flight/deleteFlightById/:Id',
};

export const BASE_URL = "http://localhost:4000"; //localhost
// export const BASE_PATH = "http://localhost:3000/"; //localhost