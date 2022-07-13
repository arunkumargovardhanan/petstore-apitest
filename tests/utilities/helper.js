module.exports = function getPropertyValueList(keys, obj) {
    let result = [];
    keys.forEach(function(key) {
        if (obj[key] != '') {
            result.push(obj[key]);
        }
    });
    return result;
}
module.exports = function getPropertyValue(key, obj) {
    obj.map(function(el) { return el[key]; });
};