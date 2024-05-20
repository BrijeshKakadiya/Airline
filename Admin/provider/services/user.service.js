import { Constant } from "../services/common/constant"
import { getCurrentUserData } from './common/common';

const registerUser = async (data) => {
    let localdata = await getCurrentUserData(Constant.USER_DATA)
    let arr = [...localdata];
    let dataObj = { ...data };
    dataObj['id'] = arr.length > 0 ? arr.length : 0
    arr.push(dataObj)
    return arr
}
const loginUser = async (data) => {
        return data
}

const getUserById = async (id) => {
    let localdata = await getCurrentUserData(Constant.USER_DATA)
    let arr = [...localdata];
    let obj = arr.filter((a) => a.id == id)[0]
    return obj
}

const updateUserById = async (data, id) => {
    let localdata = await getCurrentUserData(Constant.USER_DATA)
    let arr = [...localdata];
    let dataObj = { ...data };
    let index = arr.findIndex(a => a.id == id)
    arr[index] = {...dataObj}

    await arr.forEach((element,i) => {
        element['id'] = i
    });
    return arr
}
const updateUserStatusById = async (data, id) => {
    let localdata = await getCurrentUserData(Constant.USER_DATA)
    let arr = [...localdata];
    let index = arr.findIndex(a => a.id == id)
    console.log("arrIndex", arr[index]);
    arr[index]["status"] = data["status"]
    await arr.forEach((element,i) => {
        element['id'] = i
    });
    console.log("arr", arr);
    return arr
}
const deleteUserById = async (id) => {
    let localdata = await getCurrentUserData(Constant.USER_DATA)
    let arr = [...localdata];
    let index = arr.findIndex(a => a.id == id)
    await arr.splice(index, 1);
    arr.forEach((element,i) => {
        element['id'] = i
    });
    return arr
}

const getAllUser = async () => {
    let localdata = await getCurrentUserData(Constant.USER_DATA)
    return [...localdata]
}

export {
    registerUser,
    loginUser,
    getUserById,
    updateUserById,
    getAllUser,
    deleteUserById,
    updateUserStatusById
};