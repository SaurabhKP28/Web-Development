import React, { useState, useEffect } from 'react';

const BMICalculator: React.FC = () => {
  const [weight, setWeight] = useState<string>('70');
  const [height, setHeight] = useState<string>('170');
  const [unit, setUnit] = useState<'metric' | 'imperial'>('metric');
  const [bmi, setBMI] = useState<number>(0);
  const [category, setCategory] = useState<string>('');

  const calculateBMI = () => {
    const weightNum = parseFloat(weight);
    const heightNum = parseFloat(height);

    if (isNaN(weightNum) || isNaN(heightNum) || heightNum === 0) {
      setBMI(0);
      setCategory('Invalid input');
      return;
    }

    let bmiValue: number;
    if (unit === 'metric') {
      // Weight in kg, height in cm
      bmiValue = weightNum / Math.pow(heightNum / 100, 2);
    } else {
      // Weight in lbs, height in inches
      bmiValue = (weightNum / Math.pow(heightNum, 2)) * 703;
    }

    setBMI(Math.round(bmiValue * 10) / 10);

    // Determine BMI category
    if (bmiValue < 18.5) {
      setCategory('Underweight');
    } else if (bmiValue < 25) {
      setCategory('Normal weight');
    } else if (bmiValue < 30) {
      setCategory('Overweight');
    } else {
      setCategory('Obese');
    }
  };

  useEffect(() => {
    calculateBMI();
  }, [weight, height, unit]);

  const getCategoryColor = () => {
    switch (category) {
      case 'Underweight':
        return 'text-yellow-500';
      case 'Normal weight':
        return 'text-green-500';
      case 'Overweight':
        return 'text-orange-500';
      case 'Obese':
        return 'text-red-500';
      default:
        return 'text-gray-500';
    }
  };

  return (
    <div className="max-w-md mx-auto">
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">BMI Calculator</h2>
        
        <div className="space-y-4">
          <div className="flex justify-center space-x-4 mb-6">
            <button
              onClick={() => setUnit('metric')}
              className={`px-4 py-2 rounded-lg font-medium ${
                unit === 'metric'
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300'
              }`}
            >
              Metric
            </button>
            <button
              onClick={() => setUnit('imperial')}
              className={`px-4 py-2 rounded-lg font-medium ${
                unit === 'imperial'
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300'
              }`}
            >
              Imperial
            </button>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Weight ({unit === 'metric' ? 'kg' : 'lbs'})
            </label>
            <input
              type="number"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Height ({unit === 'metric' ? 'cm' : 'inches'})
            </label>
            <input
              type="number"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            />
          </div>

          <div className="mt-6 p-4 bg-gray-100 dark:bg-gray-700 rounded-lg">
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-800 dark:text-white mb-2">
                {bmi.toFixed(1)}
              </div>
              <div className={`text-xl font-semibold ${getCategoryColor()}`}>
                {category}
              </div>
            </div>
          </div>

          <div className="mt-4 space-y-2 text-sm text-gray-600 dark:text-gray-400">
            <p>BMI Categories:</p>
            <ul className="list-disc pl-5">
              <li>Underweight: &lt; 18.5</li>
              <li>Normal weight: 18.5 - 24.9</li>
              <li>Overweight: 25 - 29.9</li>
              <li>Obese: ≥ 30</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BMICalculator;