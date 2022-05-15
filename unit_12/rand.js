module.exports = function (a, b) {
    let bigger = Math.max(a, b);
    let smaller = Math.min(a, b);
    let randomDigit = Math.round((bigger - smaller) * Math.random()) + smaller;
    return randomDigit;
};