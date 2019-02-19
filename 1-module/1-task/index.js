"use strict";

/**
 * Power
 * @param {number} m base
 * @param {number} n index
 * @returns {number}
 */
function pow(m, n) {
    let k = m;
    let i = 1;
    i = parseInt(i.toFixed(0));
    m = parseInt(m.toFixed(0));
    n = parseInt(n.toFixed(0));

    for (i; i < n; i++) {
        m = m * k;
    }

    return m;
}

console.log(pow(3, 3));