import React, { useState } from 'react';
import { Calculator, Menu, Moon, Sun } from 'lucide-react';
import Sidebar from './components/Sidebar';
import CalculatorView from './views/CalculatorView';
import { calculatorTypes } from './data/calculators';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [activeCalculator, setActiveCalculator] = useState('basic');

  return (
    <div className={`min-h-screen ${darkMode ? 'dark' : ''}`}>
      <div className="min-h-screen bg-white dark:bg-[#0a192f]">
        <nav className="bg-white dark:bg-[#112240] border-b border-gray-200 dark:border-[#172a45] fixed w-full z-30 top-0">
          <div className="px-3 py-3 lg:px-5 lg:pl-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <button
                  onClick={() => setSidebarOpen(!isSidebarOpen)}
                  className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-[#172a45]"
                >
                  <Menu className="w-6 h-6 text-gray-500 dark:text-gray-400" />
                </button>
                <div className="ml-3 flex items-center">
                  <Calculator className="w-8 h-8 text-blue-600 dark:text-blue-500" />
                  <span className="ml-3 text-xl font-semibold text-gray-800 dark:text-white">
                    CalcHub Pro
                  </span>
                </div>
              </div>
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-[#172a45]"
              >
                {darkMode ? (
                  <Sun className="w-6 h-6 text-gray-500 dark:text-gray-400" />
                ) : (
                  <Moon className="w-6 h-6 text-gray-500" />
                )}
              </button>
            </div>
          </div>
        </nav>

        <div className="flex pt-16">
          <Sidebar
            isOpen={isSidebarOpen}
            activeCalculator={activeCalculator}
            onCalculatorChange={setActiveCalculator}
            calculatorTypes={calculatorTypes}
          />
          
          <div className={`flex flex-1 ${isSidebarOpen ? 'lg:ml-64' : ''} transition-all duration-300`}>
            <div className="hidden xl:block w-[160px] p-4">
              <div className="ad-sidebar">
                <div className="w-full h-full bg-white dark:bg-[#112240] rounded-lg flex items-center justify-center text-sm text-gray-500 dark:text-gray-400">
                  Advertisement
                </div>
              </div>
            </div>

            <main className="flex-1 p-4 max-w-4xl mx-auto">
              <div className="ad-container mb-6">
                <div className="w-full h-full bg-white dark:bg-[#112240] flex items-center justify-center text-sm text-gray-500 dark:text-gray-400">
                  Advertisement
                </div>
              </div>

              <div className="bg-white dark:bg-[#112240] rounded-lg shadow-lg p-6">
                <CalculatorView type={activeCalculator} />
              </div>

              <div className="ad-container mt-6">
                <div className="w-full h-full bg-white dark:bg-[#112240] flex items-center justify-center text-sm text-gray-500 dark:text-gray-400">
                  Advertisement
                </div>
              </div>
            </main>

            <div className="hidden xl:block w-[160px] p-4">
              <div className="ad-sidebar">
                <div className="w-full h-full bg-white dark:bg-[#112240] rounded-lg flex items-center justify-center text-sm text-gray-500 dark:text-gray-400">
                  Advertisement
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;