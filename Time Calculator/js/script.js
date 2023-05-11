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
    if (valueOptions.options[valueOptions.selectedIndex].value === `valueHoursOptions` && resulOptions.options[resulOptions.selectedIndex].value === `resultMinutesOptions`) {
        result.innerHTML = value.innerHTML * 60;
    } else if (valueOptions.options[valueOptions.selectedIndex].value === `valueMicrosecondsOptions` && resulOptions.options[resulOptions.selectedIndex].value === `resultMicrosecondsOptions`) {
        result.innerHTML = value.innerHTML;
    } else if (valueOptions.options[valueOptions.selectedIndex].value === `valueMicrosecondsOptions` && resulOptions.options[resulOptions.selectedIndex].value === `resultMillisecondsOptions`) {
        result.innerHTML = value.innerHTML / 1000;
    } else if (valueOptions.options[valueOptions.selectedIndex].value === `valueMicrosecondsOptions` && resulOptions.options[resulOptions.selectedIndex].value === `resultSecondsOptions`) {
        result.innerHTML = value.innerHTML / 1000000;
    } else if (valueOptions.options[valueOptions.selectedIndex].value === `valueMicrosecondsOptions` && resulOptions.options[resulOptions.selectedIndex].value === `resultMinutesOptions`) {
        result.innerHTML = eval(value.innerHTML / 60000000);
    } else if (valueOptions.options[valueOptions.selectedIndex].value === `valueMicrosecondsOptions` && resulOptions.options[resulOptions.selectedIndex].value === `resultHoursOptions`) {
        result.innerHTML = value.innerHTML / 3600000000;
    } else if (valueOptions.options[valueOptions.selectedIndex].value === `valueMicrosecondsOptions` && resulOptions.options[resulOptions.selectedIndex].value === `resultDaysOptions`) {
        result.innerHTML = value.innerHTML / 86400000000;
    } else if (valueOptions.options[valueOptions.selectedIndex].value === `valueMicrosecondsOptions` && resulOptions.options[resulOptions.selectedIndex].value === `resultWeeksOptions`) {
        result.innerHTML = value.innerHTML / 604800000000;
    } else if (valueOptions.options[valueOptions.selectedIndex].value === `valueMicrosecondsOptions` && resulOptions.options[resulOptions.selectedIndex].value === `resultMonthOptions`) {
        result.innerHTML = value.innerHTML / 2628000000000;
    } else if (valueOptions.options[valueOptions.selectedIndex].value === `valueMicrosecondsOptions` && resulOptions.options[resulOptions.selectedIndex].value === `resultYearsOptions`) {
        result.innerHTML = value.innerHTML / 31536000000000;
    } else if (valueOptions.options[valueOptions.selectedIndex].value === `valueMillisecondsOptions` && resulOptions.options[resulOptions.selectedIndex].value === `resultMicrosecondsOptions`) {
        result.innerHTML = value.innerHTML * 1000;
    } else if (valueOptions.options[valueOptions.selectedIndex].value === `valueMillisecondsOptions` && resulOptions.options[resulOptions.selectedIndex].value === `resultMillisecondsOptions`) {
        result.innerHTML = value.innerHTML;
    } else if (valueOptions.options[valueOptions.selectedIndex].value === `valueMillisecondsOptions` && resulOptions.options[resulOptions.selectedIndex].value === `resultSecondsOptions`) {
        result.innerHTML = value.innerHTML / 1000;
    } else if (valueOptions.options[valueOptions.selectedIndex].value === `valueMillisecondsOptions` && resulOptions.options[resulOptions.selectedIndex].value === `resultMinutesOptions`) {
        result.innerHTML = value.innerHTML / 60000;
    } else if (valueOptions.options[valueOptions.selectedIndex].value === `valueMillisecondsOptions` && resulOptions.options[resulOptions.selectedIndex].value === `resultHoursOptions`) {
        result.innerHTML = value.innerHTML / 3600000;
    } else if (valueOptions.options[valueOptions.selectedIndex].value === `valueMillisecondsOptions` && resulOptions.options[resulOptions.selectedIndex].value === `resultDaysOptions`) {
        result.innerHTML = value.innerHTML / 86400000;
    } else if (valueOptions.options[valueOptions.selectedIndex].value === `valueMillisecondsOptions` && resulOptions.options[resulOptions.selectedIndex].value === `resultWeeksOptions`) {
        result.innerHTML = value.innerHTML / 604800000;
    }  else if (valueOptions.options[valueOptions.selectedIndex].value === `valueMillisecondsOptions` && resulOptions.options[resulOptions.selectedIndex].value === `resultMonthOptions`) {
        result.innerHTML = value.innerHTML / 2628000000;
    }  else if (valueOptions.options[valueOptions.selectedIndex].value === `valueMillisecondsOptions` && resulOptions.options[resulOptions.selectedIndex].value === `resultYearsOptions`) {
        result.innerHTML = value.innerHTML / 31536000000;
    } else if (valueOptions.options[valueOptions.selectedIndex].value === `valueSecondsOptions` && resulOptions.options[resulOptions.selectedIndex].value === `resultMicrosecondsOptions`) {
        result.innerHTML = value.innerHTML * 1000000;
    } else if (valueOptions.options[valueOptions.selectedIndex].value === `valueSecondsOptions` && resulOptions.options[resulOptions.selectedIndex].value === `resultMillisecondsOptions`) {
        result.innerHTML = value.innerHTML * 1000;
    } else if (valueOptions.options[valueOptions.selectedIndex].value === `valueSecondsOptions` && resulOptions.options[resulOptions.selectedIndex].value === `resultSecondsOptions`) {
        result.innerHTML = value.innerHTML;
    } else if (valueOptions.options[valueOptions.selectedIndex].value === `valueSecondsOptions` && resulOptions.options[resulOptions.selectedIndex].value === `resultMinutesOptions`) {
        result.innerHTML = parseFloat(eval(value.innerHTML / 60).toFixed(6));
    } else if (valueOptions.options[valueOptions.selectedIndex].value === `valueSecondsOptions` && resulOptions.options[resulOptions.selectedIndex].value === `resultHoursOptions`) {
        result.innerHTML = parseFloat(eval(value.innerHTML / 3600).toFixed(6));
    } else if (valueOptions.options[valueOptions.selectedIndex].value === `valueSecondsOptions` && resulOptions.options[resulOptions.selectedIndex].value === `resultDaysOptions`) {
        result.innerHTML = parseFloat(eval(value.innerHTML / 86400).toFixed(6));
    } else if (valueOptions.options[valueOptions.selectedIndex].value === `valueSecondsOptions` && resulOptions.options[resulOptions.selectedIndex].value === `resultWeeksOptions`) {
        result.innerHTML = parseFloat(eval(value.innerHTML / 604800).toFixed(6));
    }  else if (valueOptions.options[valueOptions.selectedIndex].value === `valueSecondsOptions` && resulOptions.options[resulOptions.selectedIndex].value === `resultMonthOptions`) {
        result.innerHTML = parseFloat(eval(value.innerHTML / 2628000).toFixed(15));
    } else if (valueOptions.options[valueOptions.selectedIndex].value === `valueSecondsOptions` && resulOptions.options[resulOptions.selectedIndex].value === `resultYearsOptions`) {
        result.innerHTML = parseFloat(eval(value.innerHTML / 31536000).toFixed(15));
    } else if (valueOptions.options[valueOptions.selectedIndex].value === `valueMinutesOptions` && resulOptions.options[resulOptions.selectedIndex].value === `resultMicrosecondsOptions`) {
        result.innerHTML = value.innerHTML * 60000000;
    } else if (valueOptions.options[valueOptions.selectedIndex].value === `valueMinutesOptions` && resulOptions.options[resulOptions.selectedIndex].value === `resultMillisecondsOptions`) {
        result.innerHTML = value.innerHTML * 60000;
    } else if (valueOptions.options[valueOptions.selectedIndex].value === `valueMinutesOptions` && resulOptions.options[resulOptions.selectedIndex].value === `resultSecondsOptions`) {
        result.innerHTML = value.innerHTML * 60;
    } else if (valueOptions.options[valueOptions.selectedIndex].value === `valueMinutesOptions` && resulOptions.options[resulOptions.selectedIndex].value === `resultMinutesOptions`) {
        result.innerHTML = value.innerHTML;
    } else if (valueOptions.options[valueOptions.selectedIndex].value === `valueMinutesOptions` && resulOptions.options[resulOptions.selectedIndex].value === `resultHoursOptions`) {
        result.innerHTML = parseFloat(eval(value.innerHTML * 0.016667).toFixed(8));
    } else if (valueOptions.options[valueOptions.selectedIndex].value === `valueMinutesOptions` && resulOptions.options[resulOptions.selectedIndex].value === `resultDaysOptions`) {
        result.innerHTML = parseFloat(eval(value.innerHTML * 0.000694).toFixed(8));
    } else if (valueOptions.options[valueOptions.selectedIndex].value === `valueMinutesOptions` && resulOptions.options[resulOptions.selectedIndex].value === `resultWeeksOptions`) {
        result.innerHTML = parseFloat(eval(value.innerHTML * 0.000099).toFixed(8));
    } else if (valueOptions.options[valueOptions.selectedIndex].value === `valueMinutesOptions` && resulOptions.options[resulOptions.selectedIndex].value === `resultMonthOptions`) {
        result.innerHTML =  parseFloat(eval(value.innerHTML * 0.000023).toFixed(8));
    } else if (valueOptions.options[valueOptions.selectedIndex].value === `valueMinutesOptions` && resulOptions.options[resulOptions.selectedIndex].value === `resultYearsOptions`) {
        result.innerHTML = parseFloat(eval(value.innerHTML * 0.000002).toFixed(8));
    } else if (valueOptions.options[valueOptions.selectedIndex].value === `valueHoursOptions` && resulOptions.options[resulOptions.selectedIndex].value === `resultMicrosecondsOptions`) {
        result.innerHTML = value.innerHTML * 3600000000;
    } else if (valueOptions.options[valueOptions.selectedIndex].value === `valueHoursOptions` && resulOptions.options[resulOptions.selectedIndex].value === `resultMillisecondsOptions`) {
        result.innerHTML = value.innerHTML * 3600000;
    } else if (valueOptions.options[valueOptions.selectedIndex].value === `valueHoursOptions` && resulOptions.options[resulOptions.selectedIndex].value === `resultSecondsOptions`) {
        result.innerHTML = value.innerHTML * 3600;
    } else if (valueOptions.options[valueOptions.selectedIndex].value === `valueHoursOptions` && resulOptions.options[resulOptions.selectedIndex].value === `resultMinutesOptions`) {
        result.innerHTML = value.innerHTML * 60;
    } else if (valueOptions.options[valueOptions.selectedIndex].value === `valueHoursOptions` && resulOptions.options[resulOptions.selectedIndex].value === `resultHoursOptions`) {
        result.innerHTML = value.innerHTML;
    } else if (valueOptions.options[valueOptions.selectedIndex].value === `valueHoursOptions` && resulOptions.options[resulOptions.selectedIndex].value === `resultDaysOptions`) {
        result.innerHTML = parseFloat(eval(value.innerHTML * 0.041667).toFixed(8));
    } else if (valueOptions.options[valueOptions.selectedIndex].value === `valueHoursOptions` && resulOptions.options[resulOptions.selectedIndex].value === `resultWeeksOptions`) {
        result.innerHTML = parseFloat(eval(value.innerHTML * 0.005952).toFixed(8));
    } else if (valueOptions.options[valueOptions.selectedIndex].value === `valueHoursOptions` && resulOptions.options[resulOptions.selectedIndex].value === `resultMonthOptions`) {
        result.innerHTML =  parseFloat(eval(value.innerHTML * 0.00137).toFixed(8));
    } else if (valueOptions.options[valueOptions.selectedIndex].value === `valueHoursOptions` && resulOptions.options[resulOptions.selectedIndex].value === `resultYearsOptions`) {
        result.innerHTML = parseFloat(eval(value.innerHTML * 0.0001141552511416).toFixed(8));
    } else if (valueOptions.options[valueOptions.selectedIndex].value === `valueDaysOptions` && resulOptions.options[resulOptions.selectedIndex].value === `resultMicrosecondsOptions`) {
        result.innerHTML = value.innerHTML * 86400000000;
    } else if (valueOptions.options[valueOptions.selectedIndex].value === `valueDaysOptions` && resulOptions.options[resulOptions.selectedIndex].value === `resultMillisecondsOptions`) {
        result.innerHTML = value.innerHTML * 86400000;
    } else if (valueOptions.options[valueOptions.selectedIndex].value === `valueDaysOptions` && resulOptions.options[resulOptions.selectedIndex].value === `resultSecondsOptions`) {
        result.innerHTML = value.innerHTML * 86400;
    } else if (valueOptions.options[valueOptions.selectedIndex].value === `valueDaysOptions` && resulOptions.options[resulOptions.selectedIndex].value === `resultMinutesOptions`) {
        result.innerHTML = value.innerHTML * 1440;
    } else if (valueOptions.options[valueOptions.selectedIndex].value === `valueDaysOptions` && resulOptions.options[resulOptions.selectedIndex].value === `resultHoursOptions`) {
        result.innerHTML = value.innerHTML * 24;
    } else if (valueOptions.options[valueOptions.selectedIndex].value === `valueDaysOptions` && resulOptions.options[resulOptions.selectedIndex].value === `resultDaysOptions`) {
        result.innerHTML = value.innerHTML;
    } else if (valueOptions.options[valueOptions.selectedIndex].value === `valueDaysOptions` && resulOptions.options[resulOptions.selectedIndex].value === `resultWeeksOptions`) {
        result.innerHTML = parseFloat(eval(value.innerHTML * 0.1428571428571).toFixed(8));
    } else if (valueOptions.options[valueOptions.selectedIndex].value === `valueDaysOptions` && resulOptions.options[resulOptions.selectedIndex].value === `resultMonthOptions`) {
        result.innerHTML = parseFloat(eval(value.innerHTML * 0.03287671232876).toFixed(8));
    } else if (valueOptions.options[valueOptions.selectedIndex].value === `valueDaysOptions` && resulOptions.options[resulOptions.selectedIndex].value === `resultYearsOptions`) {
        result.innerHTML = parseFloat(eval(value.innerHTML * 0.002739726027397).toFixed(8));
    } else if (valueOptions.options[valueOptions.selectedIndex].value === `valueWeeksOptions` && resulOptions.options[resulOptions.selectedIndex].value === `resultMicrosecondsOptions`) {
        result.innerHTML = value.innerHTML * 604800000000;
    } else if (valueOptions.options[valueOptions.selectedIndex].value === `valueWeeksOptions` && resulOptions.options[resulOptions.selectedIndex].value === `resultMillisecondsOptions`) {
        result.innerHTML = value.innerHTML * 604800000;
    } else if (valueOptions.options[valueOptions.selectedIndex].value === `valueWeeksOptions` && resulOptions.options[resulOptions.selectedIndex].value === `resultSecondsOptions`) {
        result.innerHTML = value.innerHTML * 604800;
    } else if (valueOptions.options[valueOptions.selectedIndex].value === `valueWeeksOptions` && resulOptions.options[resulOptions.selectedIndex].value === `resultMinutesOptions`) {
        result.innerHTML = value.innerHTML * 10080;
    } else if (valueOptions.options[valueOptions.selectedIndex].value === `valueWeeksOptions` && resulOptions.options[resulOptions.selectedIndex].value === `resultHoursOptions`) {
        result.innerHTML = value.innerHTML * 168;
    } else if (valueOptions.options[valueOptions.selectedIndex].value === `valueWeeksOptions` && resulOptions.options[resulOptions.selectedIndex].value === `resultDaysOptions`) {
        result.innerHTML = value.innerHTML * 7;
    } else if (valueOptions.options[valueOptions.selectedIndex].value === `valueWeeksOptions` && resulOptions.options[resulOptions.selectedIndex].value === `resultWeeksOptions`) {
        result.innerHTML = value.innerHTML;
    } else if (valueOptions.options[valueOptions.selectedIndex].value === `valueWeeksOptions` && resulOptions.options[resulOptions.selectedIndex].value === `resultMonthOptions`) {
        result.innerHTML = parseFloat(eval(value.innerHTML * 0.2301369863014).toFixed(8));
    } else if (valueOptions.options[valueOptions.selectedIndex].value === `valueWeeksOptions` && resulOptions.options[resulOptions.selectedIndex].value === `resultYearsOptions`) {
        result.innerHTML = parseFloat(eval(value.innerHTML * 0.01917808219178).toFixed(8));
    } else if (valueOptions.options[valueOptions.selectedIndex].value === `valueMonthOptions` && resulOptions.options[resulOptions.selectedIndex].value === `resultMicrosecondsOptions`) {
        result.innerHTML = value.innerHTML * 2628000000000;
    } else if (valueOptions.options[valueOptions.selectedIndex].value === `valueMonthOptions` && resulOptions.options[resulOptions.selectedIndex].value === `resultMillisecondsOptions`) {
        result.innerHTML = value.innerHTML * 2628000000;
    } else if (valueOptions.options[valueOptions.selectedIndex].value === `valueMonthOptions` && resulOptions.options[resulOptions.selectedIndex].value === `resultSecondsOptions`) {
        result.innerHTML = value.innerHTML * 2628000;
    } else if (valueOptions.options[valueOptions.selectedIndex].value === `valueMonthOptions` && resulOptions.options[resulOptions.selectedIndex].value === `resultMinutesOptions`) {
        result.innerHTML = value.innerHTML * 43800;
    } else if (valueOptions.options[valueOptions.selectedIndex].value === `valueMonthOptions` && resulOptions.options[resulOptions.selectedIndex].value === `resultHoursOptions`) {
        result.innerHTML = value.innerHTML * 730;
    } else if (valueOptions.options[valueOptions.selectedIndex].value === `valueMonthOptions` && resulOptions.options[resulOptions.selectedIndex].value === `resultDaysOptions`) {
        result.innerHTML = parseFloat(eval(value.innerHTML * 30.41666666667).toFixed(8));
    } else if (valueOptions.options[valueOptions.selectedIndex].value === `valueMonthOptions` && resulOptions.options[resulOptions.selectedIndex].value === `resultWeeksOptions`) {
        result.innerHTML = parseFloat(eval(value.innerHTML * 4.345238095238).toFixed(8));
    } else if (valueOptions.options[valueOptions.selectedIndex].value === `valueMonthOptions` && resulOptions.options[resulOptions.selectedIndex].value === `resultMonthOptions`) {
        result.innerHTML = value.innerHTML;
    } else if (valueOptions.options[valueOptions.selectedIndex].value === `valueMonthOptions` && resulOptions.options[resulOptions.selectedIndex].value === `resultYearsOptions`) {
        result.innerHTML = parseFloat(eval(value.innerHTML * 0.08333333333333).toFixed(8));
    } else if (valueOptions.options[valueOptions.selectedIndex].value === `valueYearsOptions` && resulOptions.options[resulOptions.selectedIndex].value === `resultMicrosecondsOptions`) {
        result.innerHTML = value.innerHTML * 31536000000000;
    } else if (valueOptions.options[valueOptions.selectedIndex].value === `valueYearsOptions` && resulOptions.options[resulOptions.selectedIndex].value === `resultMillisecondsOptions`) {
        result.innerHTML = value.innerHTML * 31536000000;
    } else if (valueOptions.options[valueOptions.selectedIndex].value === `valueYearsOptions` && resulOptions.options[resulOptions.selectedIndex].value === `resultSecondsOptions`) {
        result.innerHTML = value.innerHTML * 31536000;
    } else if (valueOptions.options[valueOptions.selectedIndex].value === `valueYearsOptions` && resulOptions.options[resulOptions.selectedIndex].value === `resultMinutesOptions`) {
        result.innerHTML = value.innerHTML * 525600;
    } else if (valueOptions.options[valueOptions.selectedIndex].value === `valueYearsOptions` && resulOptions.options[resulOptions.selectedIndex].value === `resultHoursOptions`) {
        result.innerHTML = value.innerHTML * 8760;
    } else if (valueOptions.options[valueOptions.selectedIndex].value === `valueYearsOptions` && resulOptions.options[resulOptions.selectedIndex].value === `resultDaysOptions`) {
        result.innerHTML = value.innerHTML * 365;
    } else if (valueOptions.options[valueOptions.selectedIndex].value === `valueYearsOptions` && resulOptions.options[resulOptions.selectedIndex].value === `resultWeeksOptions`) {
        result.innerHTML = parseFloat(eval(value.innerHTML * 52.14285714286).toFixed(8));
    } else if (valueOptions.options[valueOptions.selectedIndex].value === `valueYearsOptions` && resulOptions.options[resulOptions.selectedIndex].value === `resultMonthOptions`) {
        result.innerHTML = value.innerHTML * 12;
    } else if (valueOptions.options[valueOptions.selectedIndex].value === `valueYearsOptions` && resulOptions.options[resulOptions.selectedIndex].value === `resultYearsOptions`) {
        result.innerHTML = value.innerHTML * 1;
    }
    result.innerHTML;
};
// console.log(value.value);


// console.log(valueOptions.options[valueOptions.selectedIndex].value);
