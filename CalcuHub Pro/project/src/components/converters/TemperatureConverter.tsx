import React, { useState, useEffect } from 'react';

const TemperatureConverter: React.FC = () => {
  const [value, setValue] = useState<string>('0');
  const [fromUnit, setFromUnit] = useState<string>('c');
  const [toUnit, setToUnit] = useState<string>('f');
  const [result, setResult] = useState<string>('');

  const units = [
    { value: 'c', label: 'Celsius (°C)' },
    { value: 'f', label: 'Fahrenheit (°F)' },
    { value: 'k', label: 'Kelvin (K)' },
  ];

  const convert = () => {
    const numValue = parseFloat(value);
    if (isNaN(numValue)) {
      setResult('Invalid input');
      return;
    }

    // Convert to Celsius first
    let inCelsius: number;
    switch (fromUnit) {
      case 'f':
        inCelsius = (numValue - 32) * (5/9);
        break;
      case 'k':
        inCelsius = numValue - 273.15;
        break;
      default:
        inCelsius = numValue;
    }

    // Convert from Celsius to target unit
    let finalResult: number;
    switch (toUnit) {
      case 'f':
        finalResult = (inCelsius * 9/5) + 32;
        break;
      case 'k':
        finalResult = inCelsius + 273.15;
        break;
      default:
        finalResult = inCelsius;
    }

    setResult(finalResult.toFixed(2));
  };

  useEffect(() => {
    convert();
  }, [value, fromUnit, toUnit]);

  return (
    <div className="max-w-md mx-auto">
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">Temperature Converter</h2>
        
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
              {result}°{toUnit.toUpperCase()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TemperatureConverter;