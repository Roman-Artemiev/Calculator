// Burger Menu

const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');

if (iconMenu) {
    iconMenu.addEventListener("click", function (element) {
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
    });
};



// Theme

const calculatorTheme = document.querySelector('.button');
const calculatorBody = document.querySelector('.calculator');
const body = document.querySelector('body');

if (calculatorTheme) {
    calculatorTheme.addEventListener("click", function (element) {
        calculatorBody.classList.toggle('_white-theme');
        body.classList.toggle('_white-theme');
    });    
};

window.addEventListener('load',
    function (e) {
        var d = new Date();
        var day = d.getDate(); if (day < 10) day = '0' + day;
        var month = d.getMonth() + 1; if (month < 10) month = '0' + month;
        var year = d.getFullYear();
        document.getElementById("fromDate").value = year + "-" + month + "-" + day;
        document.getElementById("toDate").value = year + "-" + month + "-" + day;
    }, false);

function calculatorDifference()
{
    var day1 = document.getElementById(`fromDate`).value;
    var day2 = document.getElementById(`toDate`).value;
    const date1 = new Date(day1);
    const date2 = new Date(day2);
    const time = Math.abs(date2 - date1);
    const days = Math.ceil(time / (1000 * 3600 * 24));
    document.getElementById(`difference`).innerHTML = days + ' Days';
    if (fromDate.value == toDate.value) {
        difference.innerHTML = 'Same dates';
    }
}

toDate.onchange = () => {
    calculatorDifference();
}

fromDate.onchange = () => {
    calculatorDifference();
}
    
