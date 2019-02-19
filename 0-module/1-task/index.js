/**
 * Power
 * @param {number} m base
 * @param {number} n index
 * @returns {number}
 */
function sum (m, n) {
    if ((!m || !n) || isNaN(m) || isNaN(n)) {
        return 'Вы ввели неверные параметры';
    } else {
        return m + n;
    }
}

console.log(sum(1, 2));
