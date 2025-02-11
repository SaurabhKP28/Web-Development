import React, { useState, useEffect } from 'react';

const LengthConverter: React.FC = () => {
  const [value, setValue] = useState<string>('1');
  const [fromUnit, setFromUnit] = useState<string>('m');
  const [toUnit, setToUnit] = useState<string>('ft');
  const [result, setResult] = useState<string>('');

  const units = [
    { value: 'm', label: 'Meters (m)' },
    { value: 'km', label: 'Kilometers (km)' },
    { value: 'cm', label: 'Centimeters (cm)' },
    { value: 'mm', label: 'Millimeters (mm)' },
    { value: 'in', label: 'Inches (in)' },
    { value: 'ft', label: 'Feet (ft)' },
    { value: 'yd', label: 'Yards (yd)' },
    { value: 'mi', label: 'Miles (mi)' },
  ];

  const convert = () => {
    const numValue = parseFloat(value);
    if (isNaN(numValue)) {
      setResult('Invalid input');
      return;
    }

    // Convert to meters first
    let inMeters: number;
    switch (fromUnit) {
      case 'km':
        inMeters = numValue * 1000;
        break;
      case 'cm':
        inMeters = numValue / 100;
        break;
      case 'mm':
        inMeters = numValue / 1000;
        break;
      case 'in':
        inMeters = numValue * 0.0254;
        break;
      case 'ft':
        inMeters = numValue * 0.3048;
        break;
      case 'yd':
        inMeters = numValue * 0.9144;
        break;
      case 'mi':
        inMeters = numValue * 1609.344;
        break;
      default:
        inMeters = numValue;
    }

    // Convert from meters to target unit
    let finalResult: number;
    switch (toUnit) {
      case 'km':
        finalResult = inMeters / 1000;
        break;
      case 'cm':
        finalResult = inMeters * 100;
        break;
      case 'mm':
        finalResult = inMeters * 1000;
        break;
      case 'in':
        finalResult = inMeters / 0.0254;
        break;
      case 'ft':
        finalResult = inMeters / 0.3048;
        break;
      case 'yd':
        finalResult = inMeters / 0.9144;
        break;
      case 'mi':
        finalResult = inMeters / 1609.344;
        break;
      default:
        finalResult = inMeters;
    }

    setResult(finalResult.toFixed(4));
  };

  useEffect(() => {
    convert();
  }, [value, fromUnit, toUnit]);

  return (
    <div className="max-w-md mx-auto">
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">Length Converter</h2>
        
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

export default LengthConverter;