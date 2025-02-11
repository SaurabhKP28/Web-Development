import React from 'react';
import BasicCalculator from '../components/calculators/BasicCalculator';
import ScientificCalculator from '../components/calculators/ScientificCalculator';
import WeightConverter from '../components/converters/WeightConverter';
import LengthConverter from '../components/converters/LengthConverter';
import TemperatureConverter from '../components/converters/TemperatureConverter';
import TimeConverter from '../components/converters/TimeConverter';
import BMICalculator from '../components/calculators/BMICalculator';
import PercentageCalculator from '../components/calculators/PercentageCalculator';
import GPACalculator from '../components/calculators/GPACalculator';
import CGPACalculator from '../components/calculators/CGPACalculator';

interface CalculatorViewProps {
  type: string;
}

const CalculatorView: React.FC<CalculatorViewProps> = ({ type }) => {
  const renderCalculator = () => {
    switch (type) {
      case 'basic':
        return <BasicCalculator />;
      case 'scientific':
        return <ScientificCalculator />;
      case 'percentage':
        return <PercentageCalculator />;
      case 'weight':
        return <WeightConverter />;
      case 'length':
        return <LengthConverter />;
      case 'temperature':
        return <TemperatureConverter />;
      case 'time':
        return <TimeConverter />;
      case 'bmi':
        return <BMICalculator />;
      case 'gpa':
        return <GPACalculator />;
      case 'cgpa':
        return <CGPACalculator />;
      default:
        return (
          <div className="text-center p-8">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
              Coming Soon
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mt-2">
              This calculator is under development.
            </p>
          </div>
        );
    }
  };

  return (
    <div className="bg-white dark:bg-[#0a192f] rounded-lg shadow-lg">
      {renderCalculator()}
    </div>
  );
}

export default CalculatorView;