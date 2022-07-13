// return property values as list for the given list of keys
// exports.ProductsDetailPage = class ProductsDetailPage {

//     /**
//      * @param {import('@playwright/test').Page} page
//      */
//     constructor(page) {
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
// module.exports = getPropertyValueList;});