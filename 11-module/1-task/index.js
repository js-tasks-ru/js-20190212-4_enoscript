(function () {

    class Tooltip {

        /**
         * Имя компонента
         * @property {string}
         */
        get name() {
            return 'tooltip';
        }

        /**
         * Обязательный отступ
         */
        get indent() {
            return 5;
        }

        constructor() {
            /**
             * Данное свойство содержит ссылку на
             * елемент содержащий подсказку
             * @type {HTMLDivElement}
             */
            this.el = document.createElement('div');
            this.el.style.position = 'absolute';

            this.el.classList.add(this.name);
            document.body.appendChild(this.el);

            this.addTooltipBind = this.addTooltip.bind(this);
            this.removeTooltipBind = this.removeTooltip.bind(this);
        }

        addTooltip(event) {
            let tooltip = this.el;
            if (!event.target.matches('span')) return;

            if (!tooltip) {
                return;
            }

            tooltip.innerHTML = event.target.dataset.tooltip;
            tooltip.classList.add(this.name +'_active');

            const coords = event.target.getBoundingClientRect();

            let left = coords.left;
            if (left < 0) {
                left = 0;
            }

            let top = coords.top - tooltip.offsetHeight - this.indent;
            if (top < 0) {
                top = coords.top + tooltip.offsetHeight + this.indent;
            }

            tooltip.style.left = `${left}px`;
            tooltip.style.top = `${top}px`;
        }

        removeTooltip() {
            let tooltip = this.el;

            tooltip.innerHTML = '';
            tooltip.classList.remove(this.name +'_active');
        }

        /**
         * Метод подключает включает работу подсказок
         * на элементе
         *
         * @param {Element} root - элемент, внутри которого, нужно включить работу подсказок
         */
        attach(root) {
            if (!root) return;
            const spans = root.querySelectorAll('[data-tooltip]');
            spans.forEach(span => {
                span.addEventListener('mouseover', this.addTooltipBind);
                span.addEventListener('mouseout', this.removeTooltipBind);
            })

        }

        /**
         * Удаляет все обработчики событий
         */
        detach() {
            const spans = document.querySelectorAll('[data-tooltip]');
            spans.forEach(span => {
                span.removeEventListener('mouseover', this.addTooltipBind);
                span.removeEventListener('mouseout', this.removeTooltipBind);
            })
        }
    }

    window.Tooltip = Tooltip;
})();