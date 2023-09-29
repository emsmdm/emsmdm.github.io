let answers;
const calculations = [];
const calcTable = document.createElement("<table>");
const headRow = document.createElement("<tr>");
const xHead = document.createElement("<th>");
const opHead = document.createElement("<th>");
const yHead = document.createElement("<th>");
const resultsHead = document.createElement("<th>");
xHead.innerText = 'x';
opHead.innerText = 'op';
yHead.innerText = 'y';
resultsHead.innerText = 'result';
headRow.appendChild(xHead);
headRow.appendChild(opHead);
headRow.appendChild(yHead);
headRow.appendChild(resultsHead);
calcTable.appendChild(headRow);
document.body.appendChild(calcTable);


do{
    let x_variable = prompt("Value of x");
    let operator = prompt("operator");
    let y_variable = prompt("Value of y");
    let x = parseInt(x_variable);
    let op_symbol = operator;
    let y = parseInt(y_variable);
    let Valid = true;

    if(isNaN(x) || isNaN(y)){
        answers = "wrong input number";
        Valid = false;
    }else if(op_symbol === '+'){
        answers = x + y;
    }else if(op_symbol === '-'){
        answers = x - y;
    }else if(op_symbol === '/'){
        answers = x / y;
    }else if(op_symbol === '*'){
        answers = x * y;
    }else if(op_symbol === '%'){
        answers = x % y;
    }else{
        answers = "computation error";
        Valid = false;
    }

    let calcRow = document.createElement("<tr>");
    let calcX = document.createElement("<td>");
    let calcOp = document.createElement("<td>");
    let calcY = document.createElement("<td>");
    let calcResults = document.createElement("<td>");

    calcX.innerText = x_variable;
    calcOp.innerText = op_symbol;
    calcY.innerText = y_variable;
    calcResults.innerText = answers;

    calcRow.appendChild(calcX);
    calcRow.appendChild(calcOp);
    calcRow.appendChild(calcY);
    calcRow.appendChild(calcResults);
    calcTable.appendChild(calcRow);
    if(Valid){
        calculations.push(answers);
    }
}while(confirm("Continue"))

const extraTable = document.createElement("<table>");
const extraHeadRow = document.createElement("<tr>");
const extraMinHead = document.createElement("<th>");
const extraMaxHead = document.createElement("<th>");
const extraAvgHead = document.createElement("<th>");
const extraTotalHead = document.createElement("<th>");

extraMinHead.innerText = "Min";
extraMaxHead.innerText = "Max";
extraAvgHead.innerText = "Average";
extraTotalHead.innerText = "Total";

extraHeadRow.appendChild(extraMinHead);
extraHeadRow.appendChild(extraMaxHead);
extraHeadRow.appendChild(extraAvgHead);
extraHeadRow.appendChild(extraTotalHead);
extraTable.appendChild(extraHeadRow);
document.body.appendChild(extraTable);

let min = calculations[0];
let max = calculations[0];
let total = calculations[0];

for(let i = 1; i < calculations.length; i++){
    if(calculations[i] < min){
        min = calculations[i];
    }

    if(calculations[i] > max){
        max = calculations[i];
    }

    total += calculations[i];
}

let avg = total / calculations.length;

let extraRow = document.createElement("<tr>");
let minRow = document.createElement("<td>");
let maxRow = document.createElement("<td>");
let avgRow = document.createElement("<td>");
let totalRow = document.createElement("<td>");

minRow.innerText = min;
maxRow.innerText = max;
avgRow.innerText = avg;
totalRow.innerText = total;

extraRow.appendChild(minRow);
extraRow.appendChild(maxRow);
extraRow.appendChild(avgRow);
extraRow.appendChild(totalRow);
extraTable.appendChild(extraRow);