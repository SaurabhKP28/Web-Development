import React from 'react';
import { 
  Calculator, 
  Scale, 
  Ruler, 
  Thermometer,
  Clock,
  Activity,
  Calculator as CalculatorIcon
} from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  activeCalculator: string;
  onCalculatorChange: (type: string) => void;
  calculatorTypes: Array<{
    id: string;
    name: string;
    category: string;
  }>;
}

const getIcon = (category: string) => {
  switch (category) {
    case 'basic':
      return <Calculator className="w-5 h-5" />;
    case 'weight':
      return <Scale className="w-5 h-5" />;
    case 'length':
      return <Ruler className="w-5 h-5" />;
    case 'temperature':
      return <Thermometer className="w-5 h-5" />;
    case 'time':
      return <Clock className="w-5 h-5" />;
    default:
      return <CalculatorIcon className="w-5 h-5" />;
  }
};

const Sidebar: React.FC<SidebarProps> = ({
  isOpen,
  activeCalculator,
  onCalculatorChange,
  calculatorTypes,
}) => {
  const categories = Array.from(new Set(calculatorTypes.map(calc => calc.category)));

  return (
    <aside
      className={`fixed top-16 left-0 z-20 h-full transition-transform ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } bg-white border-r border-gray-200 lg:translate-x-0 dark:bg-[#0a192f] dark:border-[#172a45]`}
      style={{ width: '16rem' }}
    >
      <div className="h-full px-3 py-4 overflow-y-auto">
        <ul className="space-y-2 font-medium">
          {categories.map((category) => (
            <li key={category} className="mt-4">
              <div className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">
                {category}
              </div>
              {calculatorTypes
                .filter((calc) => calc.category === category)
                .map((calc) => (
                  <button
                    key={calc.id}
                    onClick={() => onCalculatorChange(calc.id)}
                    className={`flex items-center w-full p-2 text-gray-900 rounded-lg hover:bg-gray-100 group ${
                      activeCalculator === calc.id
                        ? 'bg-blue-100 text-blue-600 dark:bg-[#172a45] dark:text-blue-300'
                        : 'dark:text-white dark:hover:bg-[#172a45]'
                    }`}
                  >
                    {getIcon(calc.id)}
                    <span className="ml-3">{calc.name}</span>
                  </button>
                ))}
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;