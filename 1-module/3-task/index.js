'use strict';

/**
 * Найти min/max в произвольной строке
 * @param   {string} str -  входные данные
 * @returns {{min:number, max:number}}  объект
 */
function getMinMax(str) {
    str = str.replace(/,|;/g, ' ');
    let arrayStr = str.split(' ');

    for (let i = 0; i < arrayStr.length; i++) {
        arrayStr[i] = +arrayStr[i] ? +arrayStr[i] : 0;
    }

    arrayStr.sort((a, b) => {
        return a - b;
    });

    return {min: +arrayStr[0], max: +arrayStr[arrayStr.length - 1]};
}