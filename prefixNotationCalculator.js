/**
 * a function to perform basic arithmetic in prefix (polish) notation (e.g. + 1 2)
 * @param expression {string} - the expression to calculate
 * @returns {number} - the result of the calculation
 */
function prefixNotationCalculator(expression) {
    const operators = ['+', '-', '*', '/']; // List of accepted operators
    // stack to store operands and intermediate results of the expression
    // we are using stack which is LIFO as we are processing the expression in reverse order from right to left
    const stack = [];

    const tokens = expression.split(' '); // split the expression into tokens using space as delimiter e.g. '+ 2 3' => ['+', '2', '3']

    while (tokens.length) {
        // pop the last token from the tokens stack (we are processing the expression in reverse order from right to left)
        const token = tokens.pop();

        // if the token is an operator, pop the last two operands from the stack and apply the operator to them
        if (operators.includes(token)) {
            const operand1 = stack.pop();
            const operand2 = stack.pop();
            const result = eval(`${operand1} ${token} ${operand2}`);
            // push the result back to the stack to be used in the next operation or to be returned
            stack.push(result);
        } else {
            // if the token is an operand, push it to the stack
            stack.push(token);
        }
    }

    // the final result is the only element in the stack
    return stack.pop();
}

// testing the prefixNotationCalculator function
console.log(prefixNotationCalculator('0')); // => 0
console.log(prefixNotationCalculator('+ 3 4')); // => 7
console.log(prefixNotationCalculator('- 3 * 4 5')); // => -17