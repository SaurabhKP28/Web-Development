import React, { useState, useEffect } from 'react';

const PercentageCalculator: React.FC = () => {
  const [value, setValue] = useState<string>('');
  const [percentage, setPercentage] = useState<string>('');
  const [result, setResult] = useState<string>('');
  const [mode, setMode] = useState<'find-percentage' | 'find-value'>('find-percentage');

  const calculate = () => {
    const numValue = parseFloat(value);
    const numPercentage = parseFloat(percentage);

    if (mode === 'find-percentage') {
      if (isNaN(numValue) || isNaN(numPercentage)) {
        setResult('Invalid input');
        return;
      }
      const percentageResult = (numValue * numPercentage) / 100;
      setResult(percentageResult.toFixed(2));
    } else {
      if (isNaN(numValue) || isNaN(numPercentage)) {
        setResult('Invalid input');
        return;
      }
      const valueResult = (numValue / numPercentage) * 100;
      setResult(valueResult.toFixed(2));
    }
  };

  useEffect(() => {
    calculate();
  }, [value, percentage, mode]);

  return (
    <div className="max-w-md mx-auto">
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">Percentage Calculator</h2>
        
        <div className="space-y-4">
          <div className="flex justify-center space-x-4 mb-6">
            <button
              onClick={() => setMode('find-percentage')}
              className={`px-4 py-2 rounded-lg font-medium ${
                mode === 'find-percentage'
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300'
              }`}
            >
              Find Percentage
            </button>
            <button
              onClick={() => setMode('find-value')}
              className={`px-4 py-2 rounded-lg font-medium ${
                mode === 'find-value'
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300'
              }`}
            >
              Find Value
            </button>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              {mode === 'find-percentage' ? 'Value' : 'Result Value'}
            </label>
            <input
              type="number"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              {mode === 'find-percentage' ? 'Percentage (%)' : 'Original Value'}
            </label>
            <input
              type="number"
              value={percentage}
              onChange={(e) => setPercentage(e.target.value)}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            />
          </div>

          <div className="mt-6 p-4 bg-gray-100 dark:bg-gray-700 rounded-lg">
            <div className="text-sm text-gray-600 dark:text-gray-400">Result:</div>
            <div className="text-2xl font-bold text-gray-800 dark:text-white">
              {result} {mode === 'find-percentage' ? '' : '%'}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PercentageCalculator;