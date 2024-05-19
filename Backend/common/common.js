const crypto = require('crypto');
const ALGO = 'aes-256-cbc';
const ENCRYPTION_KEY = 'rbzYbCrwd4M2fFutsdCtexHANdBTK9hs'; // Must be 256 bits (32 characters)
const IV_LENGTH = 16; // For AES, this is always 16
const multer = require('multer');
const path = require('path');
var mongodb= require('mongodb');
const fs = require('fs');


exports.decryptPassword = _decryptPassword;
exports.encryptPassword = _encryptPassword;
exports.isValidObjectId = _isValidObjectId;
exports.isUndefinedOrNull = _isUndefinedOrNull;
exports.isValidateEmail = _isValidateEmail;
exports.fileUpload = _fileUpload;

function _encryptPassword(text, callback) {
    let iv = crypto.randomBytes(IV_LENGTH);
    let cipher = crypto.createCipheriv(ALGO, Buffer.from(ENCRYPTION_KEY), iv);
    let encrypted = cipher.update(text);
    encrypted = Buffer.concat([encrypted, cipher.final()]);
    callback(iv.toString('hex') + ':' + encrypted.toString('hex'));
}

function _decryptPassword(text, callback) {
    console.log('text',typeof text);
    let textParts = text.split(':');
    let iv = Buffer.from(textParts.shift(), 'hex');
    let encryptedText = Buffer.from(textParts.join(':'), 'hex');
    let decipher = crypto.createDecipheriv(ALGO, Buffer.from(ENCRYPTION_KEY), iv);
    let decrypted = decipher.update(encryptedText);
    decrypted = Buffer.concat([decrypted, decipher.final()]);
    callback(decrypted.toString());
}
//Check id is valid object id or not    
function _isValidObjectId(id) {
    return mongodb.ObjectID.isValid(id);
}

//Check Undefined and null value
function _isUndefinedOrNull(value) {
    if (value == "undefined" || value == null || value == "") {
        return true;
    } else {
        return false;
    }
}

/*
Validate email address
*/
function _isValidateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

/*
upload photo
*/
function _fileUpload(folder, _fileName, req, res, callback) {
    var files = [];
    var file_name;
    var type;
    var storage = multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, folder)
        },
        filename: (req, file, cb) => {
            const match = ["image/png", "image/jpeg"];
            var date = Date.now();
            if (_fileName == "") {
                cb(null, file.fieldname + '-' + date + path.extname(file.originalname));
                file_name = file.fieldname + '-' + date + path.extname(file.originalname)
            } else {
                cb(null, _fileName + path.extname(file.originalname));
                file_name = _fileName + path.extname(file.originalname)
            }

            type = file.fieldname;
            if (type == 'photo') {
                files.push({ type: type, filename: folder + file_name });
            }
        }
    });
    
    var upload = multer({ storage: storage }).fields([
        { name: 'photo' },
        { name: 'Id' }
    ]);

    // to declare some path to store your converted image
    upload(req, res, (err, i) => {
        if (err) {
            callback(err, []);
        } else {
            var res_files = [];
            res_files.push(files);
            callback(null, files);
        }
    });
}