/**
 * showSalary
 * @param {Array} data - данные о пользователях
 * @param {number} age - максимальный возраст
 * @returns {string}
 */
function showSalary(data, age) {
    let result = '';
    const persons = data.filter(person => person['age'] <= age);

    for (let i = 0; i < persons.length; i++) {
        let str = `${persons[i]['name']}, ${persons[i]['balance']}`;
        result += result ? `\n${str}` : `${str}`;
    }

    return result;
}
