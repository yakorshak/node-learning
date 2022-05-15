const config = require('./config');
const rand = require('../rand');

module.exports = function (strLength) {
    let configLength = config.length;
    let newArray = [];

    for (let i = 0; i < strLength; i++) {
        let randomElement = rand(0, configLength);
        newArray.push(config[randomElement]);
    }

    let result = newArray.join('');
    
    return result;
};

