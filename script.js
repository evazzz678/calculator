

let txt = '';
let num1, num2, oper;

function getNumber(num) {

    document.getElementById('txt').value += num

    console.log(txt);

}

function add(op) {
    num1 = document.getElementById('txt').value;
    oper = op

    document.getElementById('txt').value = ''
}

function result() {
    num2 = document.getElementById('txt').value;

    let result
    switch (oper) {
        case '+':
            result = Number(num1) + Number(num2);
            break;
        case '-':
            result = Number(num1) - Number(num2);
            break;
        case '*':
            result = Number(num1) * Number(num2);
            break;
         case '/':
            result = Number(num1) / Number(num2);
            break;

    }

    document.getElementById('txt').value = result

}

function cl() {
    document.getElementById('txt').value = '';
    num1 = ''
    num2 = ''
    oper = ''
    
}