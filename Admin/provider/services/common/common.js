import { Constant } from "./constant"
import { toast } from 'react-toastify'

const isUndefinedOrNull = (value) => {
    if (typeof value === "undefined" || value === null || value === "") {
        return true;
    } else {
        return false;
    }
}

/*
Email Validation function
*/
const isValidateEmail = (email) => {
    const regex = Constant.EMAIL_REGEX;
    return regex.test(String(email).toLowerCase());
}

/*
TYPE:GET
To value is undefined or null.
*/
const isObjEmpty = (obj) => {
    return obj == null || !Object.keys(obj).length;
}

const setCurrentUserData = (data) => {
    localStorage.setItem(Constant.SESSION_DATA, JSON.stringify(data.data));
    localStorage.setItem(Constant.JWT_TOKEN, data.token);
}

const getCurrentUserData = (session) => {
    var val = localStorage.getItem(session);
    var data = JSON.parse(val);
    return (data);
};
const removeCurrentUserData = () => {
    localStorage.removeItem(Constant.SESSION_DATA);
    localStorage.removeItem(Constant.JWT_TOKEN);
};

const showSuccessNotification = (message) => {
    toast.success(message, { duration: 500 })
}

const showFailNotification = (message) => {
    toast.error(message, { duration: 1000 })
}

const capitalizeFirstLetter = (string) => {
    if (string) {
      return string.replace(/\w\S*/g, function (txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
      });
    } else {
      return string;
    }
  }

export {
    isUndefinedOrNull,
    isValidateEmail,
    isObjEmpty,
    setCurrentUserData,
    getCurrentUserData,
    removeCurrentUserData,
    showSuccessNotification,
    showFailNotification,
    capitalizeFirstLetter
}