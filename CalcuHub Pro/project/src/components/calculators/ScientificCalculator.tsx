import React, { useState } from 'react';

const ScientificCalculator: React.FC = () => {
  const [display, setDisplay] = useState('0');
  const [equation, setEquation] = useState('');
  const [isNewNumber, setIsNewNumber] = useState(true);
  const [isRadians, setIsRadians] = useState(true);

  const handleNumber = (num: string) => {
    if (isNewNumber) {
      setDisplay(num);
      setIsNewNumber(false);
    } else {
      setDisplay(display + num);
    }
  };

  const handleOperator = (op: string) => {
    setEquation(display + ' ' + op + ' ');
    setIsNewNumber(true);
  };

  const handleFunction = (func: string) => {
    try {
      let result: number;
      const num = parseFloat(display);
      
      switch (func) {
        case 'sin':
          result = isRadians ? Math.sin(num) : Math.sin((num * Math.PI) / 180);
          break;
        case 'cos':
          result = isRadians ? Math.cos(num) : Math.cos((num * Math.PI) / 180);
          break;
        case 'tan':
          result = isRadians ? Math.tan(num) : Math.tan((num * Math.PI) / 180);
          break;
        case 'sqrt':
          result = Math.sqrt(num);
          break;
        case 'log':
          result = Math.log10(num);
          break;
        case 'ln':
          result = Math.log(num);
          break;
        case 'π':
          result = Math.PI;
          break;
        case 'e':
          result = Math.E;
          break;
        default:
          result = num;
      }
      setDisplay(result.toString());
      setIsNewNumber(true);
    } catch (error) {
      setDisplay('Error');
      setIsNewNumber(true);
    }
  };

  const calculate = () => {
    try {
      const result = eval(equation + display);
      setDisplay(result.toString());
      setEquation('');
      setIsNewNumber(true);
    } catch (error) {
      setDisplay('Error');
      setEquation('');
      setIsNewNumber(true);
    }
  };

  const clear = () => {
    setDisplay('0');
    setEquation('');
    setIsNewNumber(true);
  };

  const buttonClass = "px-4 py-2 m-1 rounded-lg font-semibold text-sm focus:outline-none transition-colors";
  const numberClass = `${buttonClass} bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-white`;
  const operatorClass = `${buttonClass} bg-blue-500 text-white hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700`;
  const functionClass = `${buttonClass} bg-purple-500 text-white hover:bg-purple-600 dark:bg-purple-600 dark:hover:bg-purple-700`;

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-lg">
        <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg mb-4">
          <div className="text-gray-500 dark:text-gray-400 text-sm h-6">
            {equation}
          </div>
          <div className="text-3xl font-bold text-right dark:text-white">
            {display}
          </div>
        </div>

        <div className="flex justify-end mb-4">
          <button
            onClick={() => setIsRadians(!isRadians)}
            className={`${buttonClass} ${
              isRadians ? 'bg-green-500' : 'bg-gray-500'
            } text-white`}
          >
            {isRadians ? 'RAD' : 'DEG'}
          </button>
        </div>
        
        <div className="grid grid-cols-5 gap-1">
          {/* Scientific Functions */}
          <button onClick={() => handleFunction('sin')} className={functionClass}>sin</button>
          <button onClick={() => handleFunction('cos')} className={functionClass}>cos</button>
          <button onClick={() => handleFunction('tan')} className={functionClass}>tan</button>
          <button onClick={() => handleFunction('log')} className={functionClass}>log</button>
          <button onClick={() => handleFunction('ln')} className={functionClass}>ln</button>
          
          <button onClick={() => handleFunction('π')} className={functionClass}>π</button>
          <button onClick={() => handleFunction('e')} className={functionClass}>e</button>
          <button onClick={() => handleFunction('sqrt')} className={functionClass}>√</button>
          <button onClick={() => handleOperator('**')} className={operatorClass}>^</button>
          <button onClick={clear} className={`${buttonClass} bg-red-500 text-white hover:bg-red-600`}>C</button>

          {/* Numbers and Basic Operators */}
          {[7, 8, 9].map(num => (
            <button key={num} onClick={() => handleNumber(num.toString())} className={numberClass}>
              {num}
            </button>
          ))}
          <button onClick={() => handleOperator('/')} className={operatorClass}>÷</button>
          <button onClick={() => handleOperator('*')} className={operatorClass}>×</button>
          
          {[4, 5, 6].map(num => (
            <button key={num} onClick={() => handleNumber(num.toString())} className={numberClass}>
              {num}
            </button>
          ))}
          <button onClick={() => handleOperator('-')} className={operatorClass}>−</button>
          <button onClick={() => handleOperator('+')} className={operatorClass}>+</button>
          
          {[1, 2, 3].map(num => (
            <button key={num} onClick={() => handleNumber(num.toString())} className={numberClass}>
              {num}
            </button>
          ))}
          <button onClick={calculate} className={`${operatorClass} row-span-2`}>=</button>
          <button onClick={() => handleNumber('.')} className={numberClass}>.</button>
          
          <button onClick={() => handleNumber('0')} className={`${numberClass} col-span-3`}>0</button>
        </div>
      </div>
    </div>
  );
};

export default ScientificCalculator;