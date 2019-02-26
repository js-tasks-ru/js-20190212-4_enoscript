'use strict';

/**
 * Генерация HTML списка друзей
 * @param {Friend[]} friends
 * @return {HTMLUListElement}
 */
function makeFriendsList (friends) {
    const ul = document.createElement('ul');

    ul.innerHTML = friends
        .map(person => `<li>${person.firstName} ${person.lastName}</li>`)
        .join('');

    return ul;
}
