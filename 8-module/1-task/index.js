'use strict';

/**
 * Компонент, который реализует сортируемую таблицу
 * @param {Array} items - данные, которые нужно отобразить
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      },
 *
 * @constructor
 */
function SortableTable(items) {
    this.rows = items;

    /**
     * @property {Element} - обязательно свойство, которое ссылается на элемент <table>
     */
    this.el = document.createElement('table');
    this.tbody = document.createElement('tbody');
    this.thead = document.createElement('thead');

    /**
     * Метод отрисовывает таблицу по заданному массиву
     */
    this.render = function() {
        for(let key in this.rows[0]) {
            const th = document.createElement('td');
            th.textContent = key;
            if (key === 'age' || key === 'salary') {
                th.dataset.type = 'number';
            }
            this.thead.appendChild(th);
        }

        this.el.appendChild(this.thead);
        this.rows.forEach(row => {
            const tr = document.createElement('tr');

            for(let key in row) {
                const td = document.createElement('td');
                td.textContent = row[key];
                tr.appendChild(td);
            }

            this.tbody.appendChild(tr);
        });

        this.el.appendChild(this.tbody);
    };

    if (this.rows) {
        this.render();
    }
    /**
     * Метод выполняет сортировку таблицы
     * @param {number} column - номер колонки, по которой нужно выполнить сортировку (отсчет начинается от 0)
     * @param {boolean} desc - признак того, что сортировка должна идти в обратном порядке
     */
    this.sort = function (column, desc = false) {
        if (!this.el) return;
        const type = this.thead.querySelectorAll('td')[column].dataset.type;
        const trs = this.el.querySelectorAll('tr');
        const rowsArr = [];
        trs.forEach(tr => {
            rowsArr.push(tr);
        });

        rowsArr.sort((rowA, rowB) => {
            const prevCell = type === 'number' ? parseInt(rowA.cells[column].innerHTML) : rowA.cells[column].innerHTML;
            const nextCell = type === 'number' ? parseInt(rowB.cells[column].innerHTML) : rowB.cells[column].innerHTML;
            if (desc === true) {
                return prevCell < nextCell ? 1 : -1;
            } else {
                return prevCell < nextCell ? -1 : 1;
            }
        });

        if (this.tbody) {
            this.el.removeChild(this.tbody);
        }

        this.el.appendChild(this.tbody);
        for (let i = 0; i < rowsArr.length; i++) {
            this.tbody.appendChild(rowsArr[i]);
        }
    };
}

