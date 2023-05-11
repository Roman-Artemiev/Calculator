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
    checkValue();
    value.innerHTML += '0';
    equal();
};

btnOne.onclick = function () {
    checkValue();
    value.innerHTML += '1';
    equal();
};

btnTwo.onclick = function () {
    checkValue();
    value.innerHTML += '2';
    equal();
};

btnThree.onclick = function () {
    checkValue();
    value.innerHTML += '3';
    equal();
};

btnFour.onclick = function () {
    checkValue();
    value.innerHTML += '4';
    equal();
};

btnFive.onclick = function () {
    checkValue();
    value.innerHTML += '5';
    equal();
};

btnSix.onclick = function () {
    checkValue();
    value.innerHTML += '6';
    equal();
};

btnSeven.onclick = function () {
    checkValue();
    value.innerHTML += '7'
    equal();
};

btnEight.onclick = function () {
    checkValue();
    value.innerHTML += '8';
    equal();
};

btnNine.onclick = function () {
    checkValue();
    value.innerHTML += '9';
    equal();
};

btnClean.onclick = function () {
    checkValue();
    value.innerHTML = '';
    result.innerHTML = '';
    valueDefault.innerHTML = '0';
    resultDefault.innerHTML = '0';
};

btnDot.onclick = function () {
    checkValue();
    if ((value.innerHTML).length == 0) {
        value.innerHTML += '0.';
    } else if ((value.innerHTML).length > 0 && (value.innerHTML).at(-1) != '.') {
        value.innerHTML += '.';
    } 
};

btnBackspace.onclick = function () {
    checkValue();
    let string = value.innerHTML.toString();
    value.innerHTML = string.slice(0, -1);
    equal();
};


function checkValue() {
    if (btnZero.onclick || btnOne.onclick || btnTwo.onclick || btnThree.onclick || btnFour.onclick || btnFive.onclick || btnSix.onclick || btnSeven.onclick || btnEight.onclick || btnNine.onclick || btnClean.onclick || btnDot.onclick || btnBackspace.onclick) {
        valueDefault.innerHTML = '';
        resultDefault.innerHTML = '';
    };
};

valueOptions.onclick = function () {
    equal();
}

resulOptions.onclick = function () {
    equal();
}

function equal() {
    if (valueOptions.options[valueOptions.selectedIndex].value === `valueCelsiusOptions` && resulOptions.options[resulOptions.selectedIndex].value === `resultCelsiusOptions`) {
        result.innerHTML = value.innerHTML;
    } else if (valueOptions.options[valueOptions.selectedIndex].value === `valueCelsiusOptions` && resulOptions.options[resulOptions.selectedIndex].value === `resultFahrenheitOptions`) {
        resultDefault.innerHTML = '';
        result.innerHTML = parseFloat((1.8 * value.innerHTML + 32).toFixed(5));
    } else if (valueOptions.options[valueOptions.selectedIndex].value === `valueCelsiusOptions` && resulOptions.options[resulOptions.selectedIndex].value === `resultKelvinOptions`) {
        resultDefault.innerHTML = '';
        result.innerHTML = Number(value.innerHTML) + 273.15;
    } else if (valueOptions.options[valueOptions.selectedIndex].value === `valueFahrenheitOptions` && resulOptions.options[resulOptions.selectedIndex].value === `resultCelsiusOptions`) {
        resultDefault.innerHTML = '';
        result.innerHTML = parseFloat(((value.innerHTML - 32) / 1.8).toFixed(5));
    } else if (valueOptions.options[valueOptions.selectedIndex].value === `valueFahrenheitOptions` && resulOptions.options[resulOptions.selectedIndex].value === `resultFahrenheitOptions`) {
        resultDefault.innerHTML = '';
        result.innerHTML = value.innerHTML;
    } else if (valueOptions.options[valueOptions.selectedIndex].value === `valueFahrenheitOptions` && resulOptions.options[resulOptions.selectedIndex].value === `resultKelvinOptions`) {
        resultDefault.innerHTML = '';
        result.innerHTML = parseFloat(((Number(value.innerHTML) + 459.67) * (5 / 9)).toFixed(4));
    } else if (valueOptions.options[valueOptions.selectedIndex].value === `valueKelvinOptions` && resulOptions.options[resulOptions.selectedIndex].value === `resultCelsiusOptions`) {
        resultDefault.innerHTML = '';
        result.innerHTML =  parseFloat((Number(value.innerHTML) - 273.15).toFixed(2));
    } else if (valueOptions.options[valueOptions.selectedIndex].value === `valueKelvinOptions` && resulOptions.options[resulOptions.selectedIndex].value === `resultFahrenheitOptions`) {
        resultDefault.innerHTML = '';
        result.innerHTML = parseFloat(((Number(value.innerHTML) - 273.15) * (9 / 5) + 32).toFixed(4));
    } else if (valueOptions.options[valueOptions.selectedIndex].value === `valueKelvinOptions` && resulOptions.options[resulOptions.selectedIndex].value === `resultKelvinOptions`) {
        resultDefault.innerHTML = '';
        result.innerHTML = value.innerHTML;
    }
};