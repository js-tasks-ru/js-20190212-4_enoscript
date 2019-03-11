'use strict';

/**
 * Метод устанавливает необходимые по условию аттрибуты таблице
 * @param {Element} table
 */
function highlight(table) {
    const trs = table.querySelectorAll('tr');
    trs.forEach(tr => {
        if (!tr.hasAttribute('hidden')) {
            tr.setAttribute('hidden', true);
        }
    });

    const statusTDs = table.querySelectorAll('tbody td:nth-child(4)');
    statusTDs.forEach(status => {
        const available = status.dataset.available;
        if (status.hasAttribute('data-available')) {
            available === 'true' ? status.parentNode.classList.add('available') : status.parentNode.classList.add('unavailable');
        }
    });

    const genderTDs = table.querySelectorAll('tbody td:nth-child(3)');
    genderTDs.forEach(gender => {
        gender.textContent === 'm' ? gender.parentNode.classList.add('male') : gender.parentNode.classList.add('female');
    });

    const ageTDs = table.querySelectorAll('tbody td:nth-child(2)');
    ageTDs.forEach(age => {
        if (parseInt(age.textContent) < 18) {
            age.parentNode.style.textDecoration = 'line-through';
        }
    });
}