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


btnDegree.onclick = function () {
    checkScreen();
    value.innerHTML = eval(value.innerHTML);
    value.innerHTML = Math.pow(value.innerHTML, 2);
};

btnPi.onclick = function () {
    value.innerHTML += '3.14159';
};

btnPlmn.onclick = function () {
    value.innerHTML = eval(value.innerHTML);
    value.innerHTML = (-1) * value.innerHTML;
};

btnPercent.onclick = function () {
    value.innerHTML = eval(value.innerHTML / 100);
};

btnRoot.onclick = function () {
    checkScreen();
    value.innerHTML = Math.sqrt(eval(value.innerHTML));
};

btnSin.onclick = function () {
    checkScreen();
    value.innerHTML = parseFloat(Math.sin(eval(value.innerHTML) / 180 * Math.PI).toFixed(8));
};

btnCos.onclick = function () {
    checkScreen();
    value.innerHTML = parseFloat(Math.cos(eval(value.innerHTML) / 180 * Math.PI).toFixed(8));
};

btnTan.onclick = function () {
    checkScreen();
    value.innerHTML = parseFloat(Math.tan(eval(value.innerHTML) / 180 * Math.PI).toFixed(8));
};

btnCtg.onclick = function () {
    checkScreen();
    value.innerHTML = parseFloat(1 / Math.tan(eval(value.innerHTML) / 180 * Math.PI).toFixed(8));
};

btnBracketLeft.onclick = function () {
    if ((value.innerHTML).at(-1) == '1' || (value.innerHTML).at(-1) == '2' || (value.innerHTML).at(-1) == '3' || (value.innerHTML).at(-1) == '4' || (value.innerHTML).at(-1) == '5' || (value.innerHTML).at(-1) == '6' || (value.innerHTML).at(-1) == '7' || (value.innerHTML).at(-1) == '8' || (value.innerHTML).at(-1) == '9' || (value.innerHTML).at(-1) == '0') {
        value.innerHTML += '*(';
    } else {
        value.innerHTML += '(';
    }
};

btnBracketRight.onclick = function () {
    value.innerHTML += ')';
};

btnModule.onclick = function () {
    checkScreen();
    value.innerHTML = Math.abs(eval(value.innerHTML));
};

function factorial(x) {
    if (x === 0) {
      return 1;
   }
    return x * factorial(x-1);
};

btnFactorial.onclick = function () {
    checkScreen();
    value.innerHTML = factorial(value.innerHTML);
};

btnE.onclick = function () {
    value.innerHTML += '2,71828';
};

btnDivideX.onclick = function () {
    checkScreen();
    value.innerHTML = 1 / eval(value.innerHTML);
};

btnTenPowerX.onclick = function () {
    checkScreen();
    value.innerHTML = 10 ** eval(value.innerHTML);
};

btnRandom.onclick = function () {
    value.innerHTML = Math.random();
};

btnXPowerY.onclick = function () {
    if ((value.innerHTML).at(-1) != '*' && (value.innerHTML).at(-1) == null) {
        value.innerHTML += '0' + '**';
    } else if ((value.innerHTML).at(-1) != '*' && (value.innerHTML).at(-2) != '*') {
        value.innerHTML += '**' ;
    } else if ((value.innerHTML).at(-1) != '*' && (value.innerHTML).at(-2) == '*') {
        value.innerHTML += '**' ;
    }
};

btnLog.onclick = function () {
    value.innerHTML = Math.log10(value.innerHTML);
};

btnIn.onclick = function () {
    value.innerHTML = Math.log(value.innerHTML);
}

btnZero.onclick = function () {
    // if ((value.innerHTML).at(-1) == null) {
    //     value.innerHTML += '0' + '.';
    // } else {
    //     value.innerHTML += '0';
    // }
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

btnDivide.onclick = function () {
    changeSign();
    // if ((value.innerHTML).at(-1) != '/') {
    //     value.innerHTML += '/';
    // }
    if ((value.innerHTML).at(-1) != '/' && (value.innerHTML).at(-1) == null) {
        value.innerHTML += '0' + '/' ;
    } else {
        value.innerHTML += '/';
    }
};

btnMultiply.onclick = function () {
    changeSign();
    // if ((value.innerHTML).at(-1) != '*') {
    //     value.innerHTML += '*';
    // }

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
    changeSign();
    if (eval(value.innerHTML) == Infinity) {
        result.innerHTML = `Oh, is it really possible?`;
    }else if (eval(value.innerHTML) == NaN) {
        exceptionWindow.style.display = 'flex';
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
    // if ((value.innerHTML).at(-1) == '/' || (value.innerHTML).at(-1) == '*' || (value.innerHTML).at(-1) == '+' || (value.innerHTML).at(-1) == '-') {
    //     let string = value.innerHTML.toString();
    //     value.innerHTML = string.slice(0, -1);
    // } else if ((value.innerHTML).at(-1) == '*' && (value.innerHTML).at(-2) == '*') {
    //     let string = value.innerHTML.toString();
    //     value.innerHTML = string.slice(0, -2);
    // }
    if ((value.innerHTML).at(-1) == '*' && (value.innerHTML).at(-2) == '*') {
        let string = value.innerHTML.toString();
        value.innerHTML = string.slice(0, -2);
    } else if ((value.innerHTML).at(-1) == '/' || (value.innerHTML).at(-1) == '*' || (value.innerHTML).at(-1) == '+' || (value.innerHTML).at(-1) == '-') {
        let string = value.innerHTML.toString();
        value.innerHTML = string.slice(0, -1);
    }

};

function checkScreen() {
    if ((value.innerHTML).at(-1) == null) {
        value.innerHTML = 'Error, please enter numbers';
    }
}


// else if ((value.innerHTML).at(-1) == '/' && btnEqual.onclick || (value.innerHTML).at(-1) == '*' && btnEqual.onclick || (value.innerHTML).at(-1) == '+' && btnEqual.onclick || (value.innerHTML).at(-1) == '-' && btnEqual.onclick) {
//     alert('asd');
// }

// else if ((value.innerHTML).at(-1) == '/' || (value.innerHTML).at(-1) == '*' || (value.innerHTML).at(-1) == '+' || (value.innerHTML).at(-1) == '-') {
//     alert('asd');
// }