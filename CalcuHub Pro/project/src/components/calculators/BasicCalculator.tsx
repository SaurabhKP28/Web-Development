import React, { useState } from 'react';

const BasicCalculator: React.FC = () => {
  const [display, setDisplay] = useState('0');
  const [equation, setEquation] = useState('');
  const [isNewNumber, setIsNewNumber] = useState(true);

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

  const buttonClass = "w-16 h-16 m-1 rounded-lg font-semibold text-lg focus:outline-none transition-colors";
  const numberClass = `${buttonClass} bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-white`;
  const operatorClass = `${buttonClass} bg-blue-500 text-white hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700`;

  return (
    <div className="max-w-md mx-auto">
      <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-lg">
        <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg mb-4">
          <div className="text-gray-500 dark:text-gray-400 text-sm h-6">
            {equation}
          </div>
          <div className="text-3xl font-bold text-right dark:text-white">
            {display}
          </div>
        </div>
        
        <div className="grid grid-cols-4 gap-2">
          <button onClick={clear} className={`${buttonClass} bg-red-500 text-white hover:bg-red-600`}>
            C
          </button>
          <button onClick={() => handleOperator('/')} className={operatorClass}>÷</button>
          <button onClick={() => handleOperator('*')} className={operatorClass}>×</button>
          <button onClick={() => handleOperator('-')} className={operatorClass}>−</button>
          
          {[7, 8, 9].map(num => (
            <button key={num} onClick={() => handleNumber(num.toString())} className={numberClass}>
              {num}
            </button>
          ))}
          <button onClick={() => handleOperator('+')} className={operatorClass}>+</button>
          
          {[4, 5, 6].map(num => (
            <button key={num} onClick={() => handleNumber(num.toString())} className={numberClass}>
              {num}
            </button>
          ))}
          <button onClick={calculate} className={`${operatorClass} row-span-2`}>=</button>
          
          {[1, 2, 3].map(num => (
            <button key={num} onClick={() => handleNumber(num.toString())} className={numberClass}>
              {num}
            </button>
          ))}
          
          <button onClick={() => handleNumber('0')} className={`${numberClass} col-span-2`}>
            0
          </button>
          <button onClick={() => handleNumber('.')} className={numberClass}>.</button>
        </div>
      </div>
    </div>
  );
};

export default BasicCalculator;