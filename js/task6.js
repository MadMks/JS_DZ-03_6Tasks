var showingTooltip;

// Включение подсказки.
document.onmouseover = function(event) {
    var target = event.target;

    var tooltip = target.getAttribute('data-tooltip');
    if (!tooltip) return;

    // Создаем элемент
    var tooltipElem = document.createElement('div');
    tooltipElem.className = 'main-tooltip';
    tooltipElem.innerHTML = tooltip;
    document.body.appendChild(tooltipElem);

    var coordsTarget = target.getBoundingClientRect();

    var left = coordsTarget.left + (target.offsetWidth - tooltipElem.offsetWidth) / 2;
    if (left < 0) left = 0; // не вылезать за левую границу окна

    var top = coordsTarget.top - tooltipElem.offsetHeight - 5;
    if (top < 0) { // не вылезать за верхнюю границу окна
        top = coordsTarget.top + target.offsetHeight + 5;
    }

    tooltipElem.style.left = left + 'px';
    tooltipElem.style.top = top + 'px';

    showingTooltip = tooltipElem;
};

// Отключение подсказки.
document.onmouseout = function(e) {

    if (showingTooltip) {
        document.body.removeChild(showingTooltip);
        showingTooltip = null;
    }
};