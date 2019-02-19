'use strict';

/**
 * Найти min/max в произвольной строке
 * @param   {string} str -  входные данные
 * @returns {{min:number, max:number}}  объект
 */
function getMinMax(str) {
    str = str.replace(/,/g, ' ');
    const arrayStr = str.split(' ');
    const arrayNumber = [];
    let min = 0, max = 0;
    for (let i = 0; i < arrayStr.length; i++) {
        arrayStr[i] = +arrayStr[i];
        if (arrayStr[i]) {
            arrayNumber.push(arrayStr[i])
        }
    }
    for (let i = 0; i < arrayNumber.length; i++) {
        (arrayNumber[i] < arrayNumber[i + 1]) ? (min = arrayNumber[i] < min ? arrayNumber[i] : min) : (max = arrayNumber[i] > max ? arrayNumber[i] : max);
    }
    return {min, max};
}
