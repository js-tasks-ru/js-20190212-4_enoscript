(function () {
    'use strict';

    /**
     * Компонент, который реализует таблицу
     * с возможностью удаления строк
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
    class ClearedTable {

        constructor(data) {
            this.el = document.createElement('table');
            this.data = data;
            this.render(data);
            this.onClick();
        }

        /**
         * Метод который рисует таблицу из переданного ему массива
         * @param {array} data - массив с данными таблицы
         */
        render(data) {
            const thead = document.createElement('thead');
            const tbody = document.createElement('tbody');

            // header table
            for(let key in this.data[0]) {
                const th = document.createElement('th');
                th.textContent = key;
                if (key === 'age' || key === 'salary') {
                    th.dataset.type = 'number';
                }
                thead.appendChild(th);
            }

            const emptyTH = document.createElement('th');
            thead.appendChild(emptyTH);

            this.el.appendChild(thead);

            // body table
            this.data.forEach(data => {
                const tr = document.createElement('tr');
                const delTD = document.createElement('td');
                delTD.innerHTML = '<a href="#delete">X</a>';

                for(let key in data) {
                    const td = document.createElement('td');
                    td.textContent = data[key];
                    tr.appendChild(td);

                    if (key === 'id') {
                        td.parentNode.dataset.id = data[key]
                    }
                }
                tr.appendChild(delTD)
                tbody.appendChild(tr);
            });

            this.el.appendChild(tbody);
        }

        /**
         * Метод инициализации удаления строки по клику на кнопку
         *
         */
        onClick() {
            this.buttons = this.el.querySelectorAll('a');
            this.buttons.forEach(button => {
                button.addEventListener('click', this.remove.bind(this));
            })
        }

        /**
         * Метод который удаляет строку в таблице
         * @param {object} event - объект события
         */
         remove(event) {
            if (!event.target.matches('a')) return;
            event.preventDefault();

            const row = event.target.parentNode.parentNode;
            row.parentNode.removeChild(row);

            if (row.dataset.id) this.onRemoved(parseInt(row.dataset.id));
        }

        /**
         * Метод который выщывается после удалении строки
         * @param {number} id - идентификатор удаляемого пользователя
         */
        onRemoved(id) {}
    }

    window.ClearedTable = ClearedTable;
})();
