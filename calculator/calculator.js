let answers;
const calculations = [];

document.write("<table>");
document.write("<tr><th>x</th><th>op</th><th>y</th><th>result</th></tr>");

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

    document.write("<tr><td>");
    document.write(x_variable);
    document.write("</td><td>")
    document.write(op_symbol);
    document.write("</td><td>");
    document.write(y_variable);
    document.write("</td><td>");
    document.write(answers);
    document.write("</td></tr>");
    if(Valid){
        calculations.push(answers);
    }
}while(confirm("Continue"))

document.write("</table>");

document.write("<table>");
document.write("<tr><th>min</th><th>max</th><th>average</th><th>total</th></tr>");

let minimum = calculations[0];
let maximum = calculations[0];
let totalNum = calculations[0];

for(let i = 1; i < calculations.length; i++){
    if(calculations[i] < minimum){
        minimum = calculations[i];
    }

    if(calculations[i] > maximum){
        maximum = calculations[i];
    }

    totalNum += calculations[i];
}

let avg = totalNum / calculations.length;

document.write("<tr><td>");
document.write(minimum);
document.write("</td><td>")
document.write(maximum);
document.write("</td><td>");
document.write(avg);
document.write("</td><td>");
document.write(totalNum);
document.write("</td></tr>");