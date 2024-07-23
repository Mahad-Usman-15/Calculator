import inquirer from "inquirer";
let answers = await inquirer.prompt([
    {
        type: "number",
        name: "numberOne",
        message: "Enter your first number"
    },
    {
        type: "number",
        name: "numberTwo",
        message: "Enter your second number"
    },
    {
        type: "list",
        name: "operator",
        message: "Select your operator",
        choices: ["+", "-", "*", "/", "%"]
    }
]);
let { numberOne, numberTwo, operator } = answers;
switch (operator) {
    case '+':
        console.log(numberOne + numberTwo);
        break;
    case '-':
        console.log(numberOne - numberTwo);
        break;
    case '*':
        console.log(numberOne * numberTwo);
        break;
    case '/':
        console.log(numberOne / numberTwo);
        break;
    case '%':
        console.log(numberOne % numberTwo);
        break;
}
