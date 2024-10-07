function calc(...args) {
    if (args.length < 3 || args.length % 2 === 0) {
      throw new Error("Invalid input type");
    }
  
    for (let i = 0; i < args.length; i += 2) {
      if (typeof args[i] !== "number" || isNaN(args[i])) {
        throw new Error("Invalid input type");
      }
      
      if (i + 1 < args.length && typeof args[i + 1] !== "string") {
        throw new Error("Invalid operator");
      }
    }
  
    const resultStack = [];
    const operatorStack = [];
  
    const precedence = (operator) => {
      switch (operator) {
        case '+':
        case '-':
          return 1;
        case '*':
        case '/':
          return 2;
        default:
          return 0;
      }
    };
  
    const applyOperator = (operator, secondNumber, firstNumber) => {
      if (firstNumber > 1000) {
        firstNumber = operator === '+' || operator === '-' ? 0 : 1;
      }
  
      switch (operator) {
        case '+':
          return firstNumber + (secondNumber > 1000 ? 0 : secondNumber);
        case '-':
          return firstNumber - (secondNumber > 1000 ? 0 : secondNumber);
        case '*':
          return firstNumber * (secondNumber > 1000 ? 1 : secondNumber);
        case '/':
          if (secondNumber === 0) throw new Error("Division by zero");
          return firstNumber / (secondNumber > 1000 ? 1 : secondNumber);
        default:
            throw new Error("Invalid operator");
      }
    };
  
    for (let i = 0; i < args.length; i++) {
      if (typeof args[i] === "number") {
        resultStack.push(args[i]);
      } else {
        while (operatorStack.length && precedence(operatorStack[operatorStack.length - 1]) >= precedence(args[i])) {
          const operator = operatorStack.pop();
          const secondNumber = resultStack.pop();
          const firstNumber = resultStack.pop();
          resultStack.push(applyOperator(operator, secondNumber, firstNumber));
        }
        operatorStack.push(args[i]);
      }
    }
  
    while (operatorStack.length) {
      const operator = operatorStack.pop();
      const secondNumber = resultStack.pop();
      const firstNumber = resultStack.pop();
      resultStack.push(applyOperator(operator, secondNumber, firstNumber));
    }
  
    return resultStack[0];
  }
  module.exports = calc;
  