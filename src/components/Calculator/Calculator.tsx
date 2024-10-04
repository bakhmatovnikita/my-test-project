import React, { useEffect, useState } from "react";

const add = (a: number, b: number): number => a + b;
const subtract = (a: number, b: number): number => a - b;
const multiply = (a: number, b: number): number => a * b;
const divide = (a: number, b: number): number => b !== 0 ? a / b : Infinity;

export const Calculator = () => {
  const [display, setDisplay] = useState('');
  const [result, setResult] = useState('');

  const handleInput = (value: string | number) => {
    if (typeof value === 'number' && !isNaN(value)) {
      setDisplay(prev => prev + value.toString());
    } else if (['+', '-', '*', '/', '%'].includes(value)) {
      if (!display.includes('=')) {
        setDisplay(prev => prev + value);
      }
    } else if (value === 'AC') {
      clearDisplay();
    } else if (value === '=') {
      calculateResult();
    } else if (value === '+/-') {
      setDisplay(prev => prev === '-' ? '' : '-');
    } else {
      setDisplay(prev => prev + value);
    }
  };

  const calculateResult = () => {
    let result = eval(display.replace(/[^0-9+-.]/g, '')).toString();
    
    const operations = display.match(/[+\-*/%]/g) || [];
    for (let i = 0; i < operations.length; i++) {
      switch (operations[i]) {
        case '+':
          result = add(parseFloat(result), parseFloat(display.split(operations[i])[1]));
          break;
        case '-':
          result = subtract(parseFloat(result), parseFloat(display.split(operations[i])[1]));
          break;
        case '*':
          result = multiply(parseFloat(result), parseFloat(display.split(operations[i])[1]));
          break;
        case '/':
          result = divide(parseFloat(result), parseFloat(display.split(operations[i])[1]));
          break;
        case '%':
          result = multiply(parseFloat(result), 0.01);
          break;
      }
    }

    setResult(result);
    setDisplay(result);
  };

  const applyOperation = (operation: string) => {
    try {
      const newCalculation = eval(`${result}${operation}`);
      setResult(newCalculation.toString());
      setDisplay(result);
    } catch (error) {
      setResult('Ошибка');
      setDisplay(result);
    }
  };

  const clearDisplay = () => {
    setDisplay('');
    setResult('');
  };

  useEffect(() => {
    if (display !== '') {
      try {
        const lastAction = display.slice(-1)[0];
        switch (lastAction) {
          case '+':
            applyOperation('+');
            break;
          case '-':
            applyOperation('-');
            break;
          case '*':
            applyOperation('*');
            break;
          case '/':
            applyOperation('/');
            break;
          default:
            break;
        }
      } catch (error) {
        console.error('Ошибка при выполнении последнего действия:', error);
      }
    }
  }, [display]);
  return (
    <div className="calculator">
      <div className="display">
        <span>{display}</span>
        <span>{result}</span>
      </div>
      <div className="keyboard">
        <div className="top-row">
          <button onClick={clearDisplay}>AC</button>
          <button onClick={() => handleInput('-')}>-</button>
          <button onClick={() => handleInput('+/-')}>±</button>
          <button onClick={calculateResult}>=</button>
        </div>
        <div className="bottom-row">
          <button onClick={() => handleInput(7)}>7</button>
          <button onClick={() => handleInput(8)}>8</button>
          <button onClick={() => handleInput(9)}>9</button>
          <button onClick={() => handleInput('/')}>÷</button>
        </div>
        <div className="middle-row">
          <button onClick={() => handleInput(4)}>4</button>
          <button onClick={() => handleInput(5)}>5</button>
          <button onClick={() => handleInput(6)}>6</button>
          <button onClick={() => handleInput('*')}>×</button>
        </div>
        <div className="bottom-row">
          <button onClick={() => handleInput(1)}>1</button>
          <button onClick={() => handleInput(2)}>2</button>
          <button onClick={() => handleInput(3)}>3</button>
          <button onClick={() => handleInput('%')}>%</button>
        </div>
      </div>
    </div>
  );
};