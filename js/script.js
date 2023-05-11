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


// Сalculations

btnZero.onclick = function () {
    value.innerHTML += '0';
};

btnOne.onclick = function () {
    value.innerHTML += '1';
};

btnTwo.onclick = function () {
    value.innerHTML += '2';
};

btnThree.onclick = function () {
    value.innerHTML += '3';
};

btnFour.onclick = function () {
    value.innerHTML += '4';
};

btnFive.onclick = function () {
    value.innerHTML += '5';
};

btnSix.onclick = function () {
    value.innerHTML += '6';
};

btnSeven.onclick = function () {
    value.innerHTML += '7';
};

btnEight.onclick = function () {
    value.innerHTML += '8';
};

btnNine.onclick = function () {
    value.innerHTML += '9';
};

btnClean.onclick = function () {
    value.innerHTML = '';
    result.innerHTML = '0';
};

btnDot.onclick = function () {
    if ((value.innerHTML).length == 0) {
        value.innerHTML += '0.';
    } else if ((value.innerHTML).length > 0 && (value.innerHTML).at(-1) != '.') {
        value.innerHTML += '.';
    } 
};

btndDvide.onclick = function () {
    changeSign();
    if ((value.innerHTML).at(-1) != '/' && (value.innerHTML).at(-1) == null) {
        value.innerHTML += '0' + '/' ;
    } else {
        value.innerHTML += '/';
    }
};

btnMultiply.onclick = function () {
    changeSign();
    if ((value.innerHTML).at(-1) != '*' && (value.innerHTML).at(-1) == null) {
        value.innerHTML += '0' + '*' ;
    } else {
        value.innerHTML += '*';
    }
};

btnPlus.onclick = function () {
    changeSign();
    if ((value.innerHTML).at(-1) != '+' && (value.innerHTML).at(-1) == null) {
        value.innerHTML += '0' + '+' ;
    } else {
        value.innerHTML += '+';
    }
};

btnMinus.onclick = function () {
    changeSign();
    if ((value.innerHTML).at(-1) != '-' && (value.innerHTML).at(-1) == null) {
        value.innerHTML += '0' + '-' ;
    } else {
        value.innerHTML += '-';
    }
};

btnEqual.onclick = function btnEqual() {
    if ((value.innerHTML).at(-1) == '-' || (value.innerHTML).at(-1) == '+' || (value.innerHTML).at(-1) == '*' || (value.innerHTML).at(-1) == '/') {
        exceptionWindow.style.display = 'flex';
    } else if (eval(value.innerHTML) == Infinity) {
        result.innerHTML = `Can't divide by zero`;
    } else {
        result.innerHTML = eval(value.innerHTML);
    }
    console.log(result);
};

closeExceptionWindow.onclick = function () {
    exceptionWindow.style.display = 'none';
};

btnBackspace.onclick = function () {
    let string = value.innerHTML.toString();
    value.innerHTML = string.slice(0, -1);
};

function changeSign() {
    if ((value.innerHTML).at(-1) == '/' || (value.innerHTML).at(-1) == '*' || (value.innerHTML).at(-1) == '+' || (value.innerHTML).at(-1) == '-') {
        let string = value.innerHTML.toString();
        value.innerHTML = string.slice(0, -1);
    }
};