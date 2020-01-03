const CryptoJS = require('react-native-crypto-js');


// import CryptoJS from "react-native-crypto-js";
 
// let data = [{id: 1}, {id: 2}]
 
// // Encrypt
// let ciphertext = CryptoJS.AES.encrypt(JSON.stringify(data), 'secret key 123').toString();
 
// // Decrypt
// let bytes  = CryptoJS.AES.decrypt(ciphertext, 'secret key 123');
// let decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
 
// console.log(decryptedData); // [{id: 1}, {id: 2}]

function handleResponse(req, res, isEncrypt, result) {
    if(result) {
        if(isEncrypt) {
            let encoded = CryptoJS.AES.encrypt(JSON.stringify(result),'secret#*@98765##*').toString();
            res.send(encoded);
        }
        else{
            res.json(result);
        }
       
    }
    else{
        console.log('Object Return Failed: (', result, ')');
    }
};

module.exports = {
    handleResponse 
}