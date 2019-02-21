/**
 * Клонируем объект
 * @param {Object} obj - объект в котором ищем
 * @param {*} value - значение, которе ищем
 * @returns {Object}
 */

function find(obj, value) {
    if (!value) return null;
    obj = JSON.parse(JSON.stringify(obj));
    let arr = [];
    let prop = '';
    let a = '';
    let b = '';

    function findPath(obj, value) {
        for (let key in obj) {

            if (typeof obj[key] === 'object') {
                b = !a ? key : a + '.' + key;
                a = key;
                findPath(obj[key], value);
            } else {
                if (obj[key] === value) {
                    prop = key;
                    arr.push(b + '.' + prop);
                }
            }
        }
        if (arr.length) return arr.length > 1 ? arr : arr[0];
        else return null
    }

    return findPath(obj, value);
}