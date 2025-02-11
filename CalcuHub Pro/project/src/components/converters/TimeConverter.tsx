import React, { useState, useEffect } from 'react';

const TimeConverter: React.FC = () => {
  const [value, setValue] = useState<string>('1');
  const [fromUnit, setFromUnit] = useState<string>('hr');
  const [toUnit, setToUnit] = useState<string>('min');
  const [result, setResult] = useState<string>('');

  const units = [
    { value: 'ms', label: 'Milliseconds (ms)' },
    { value: 's', label: 'Seconds (s)' },
    { value: 'min', label: 'Minutes (min)' },
    { value: 'hr', label: 'Hours (hr)' },
    { value: 'd', label: 'Days (d)' },
    { value: 'wk', label: 'Weeks (wk)' },
    { value: 'mo', label: 'Months (mo)' },
    { value: 'y', label: 'Years (y)' },
  ];

  const convert = () => {
    const numValue = parseFloat(value);
    if (isNaN(numValue)) {
      setResult('Invalid input');
      return;
    }

    // Convert to milliseconds first
    let inMs: number;
    switch (fromUnit) {
      case 's':
        inMs = numValue * 1000;
        break;
      case 'min':
        inMs = numValue * 60000;
        break;
      case 'hr':
        inMs = numValue * 3600000;
        break;
      case 'd':
        inMs = numValue * 86400000;
        break;
      case 'wk':
        inMs = numValue * 604800000;
        break;
      case 'mo':
        inMs = numValue * 2629800000;
        break;
      case 'y':
        inMs = numValue * 31557600000;
        break;
      default:
        inMs = numValue;
    }

    // Convert from milliseconds to target unit
    let finalResult: number;
    switch (toUnit) {
      case 's':
        finalResult = inMs / 1000;
        break;
      case 'min':
        finalResult = inMs / 60000;
        break;
      case 'hr':
        finalResult = inMs / 3600000;
        break;
      case 'd':
        finalResult = inMs / 86400000;
        break;
      case 'wk':
        finalResult = inMs / 604800000;
        break;
      case 'mo':
        finalResult = inMs / 2629800000;
        break;
      case 'y':
        finalResult = inMs / 31557600000;
        break;
      default:
        finalResult = inMs;
    }

    setResult(finalResult.toFixed(4));
  };

  useEffect(() => {
    convert();
  }, [value, fromUnit, toUnit]);

  return (
    <div className="max-w-md mx-auto">
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">Time Converter</h2>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Value
            </label>
            <input
              type="number"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                From
              </label>
              <select
                value={fromUnit}
                onChange={(e) => setFromUnit(e.target.value)}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              >
                {units.map((unit) => (
                  <option key={unit.value} value={unit.value}>
                    {unit.label}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                To
              </label>
              <select
                value={toUnit}
                onChange={(e) => setToUnit(e.target.value)}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              >
                {units.map((unit) => (
                  <option key={unit.value} value={unit.value}>
                    {unit.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="mt-6 p-4 bg-gray-100 dark:bg-gray-700 rounded-lg">
            <div className="text-sm text-gray-600 dark:text-gray-400">Result:</div>
            <div className="text-2xl font-bold text-gray-800 dark:text-white">
              {result} {toUnit}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimeConverter;