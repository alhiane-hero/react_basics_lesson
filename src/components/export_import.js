export const num1 = 10;
export const num2 = 20;
export function sum(num1, num2) {
    return num1 + num2;
}

function calc(n1, n2, opr) {
    if (opr === '+') {
        return n1 + n2;
    } else if (opr === '-') {
        return n1 - n2;
    } else if (opr === '*') {
        return n1 * n2;
    } else if (opr === '/') {
        return n1 / n2;
    } else if (opr === '%') {
        return n1 % n2;
    } else {
        return 'Your Opr Is Wrong!';
    }
}   
// default export;
export default calc;

