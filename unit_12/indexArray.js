module.exports = function(a, b) {
    let arrayOfindex = [];
    let newObj = {};

    for (let i = 0; i < a.length; i++) {
        arrayOfindex.push(a[i][b]);
        newObj[a[i][b]] = a[i];
    }

    return newObj;
}