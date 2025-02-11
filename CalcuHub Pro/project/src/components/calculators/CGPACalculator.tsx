import React, { useState } from 'react';

interface Semester {
  id: number;
  gpa: string;
  credits: string;
}

const CGPACalculator: React.FC = () => {
  const [semesters, setSemesters] = useState<Semester[]>([
    { id: 1, gpa: '', credits: '' }
  ]);
  const [cgpa, setCGPA] = useState<string>('0.00');

  const addSemester = () => {
    setSemesters([...semesters, {
      id: semesters.length + 1,
      gpa: '',
      credits: ''
    }]);
  };

  const removeSemester = (id: number) => {
    if (semesters.length > 1) {
      setSemesters(semesters.filter(semester => semester.id !== id));
    }
  };

  const updateSemester = (id: number, field: keyof Semester, value: string) => {
    setSemesters(semesters.map(semester =>
      semester.id === id ? { ...semester, [field]: value } : semester
    ));
  };

  const calculateCGPA = () => {
    let totalPoints = 0;
    let totalCredits = 0;

    semesters.forEach(semester => {
      const gpa = parseFloat(semester.gpa);
      const credits = parseFloat(semester.credits);
      
      if (!isNaN(gpa) && !isNaN(credits)) {
        totalPoints += gpa * credits;
        totalCredits += credits;
      }
    });

    if (totalCredits === 0) {
      setCGPA('0.00');
    } else {
      setCGPA((totalPoints / totalCredits).toFixed(2));
    }
  };

  return (
    <div className="max-w-xl mx-auto">
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">CGPA Calculator</h2>
        
        <div className="space-y-4">
          {semesters.map(semester => (
            <div key={semester.id} className="grid grid-cols-12 gap-4 items-center">
              <div className="col-span-4">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Semester {semester.id}
                </label>
              </div>
              <div className="col-span-3">
                <input
                  type="number"
                  placeholder="GPA"
                  value={semester.gpa}
                  onChange={(e) => updateSemester(semester.id, 'gpa', e.target.value)}
                  min="0"
                  max="4"
                  step="0.01"
                  className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                />
              </div>
              <div className="col-span-3">
                <input
                  type="number"
                  placeholder="Credits"
                  value={semester.credits}
                  onChange={(e) => updateSemester(semester.id, 'credits', e.target.value)}
                  className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                />
              </div>
              <div className="col-span-2 flex justify-end">
                <button
                  onClick={() => removeSemester(semester.id)}
                  className="p-2 text-red-500 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300"
                  disabled={semesters.length === 1}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          <div className="flex justify-between">
            <button
              onClick={addSemester}
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
            >
              Add Semester
            </button>
            <button
              onClick={calculateCGPA}
              className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
            >
              Calculate CGPA
            </button>
          </div>

          <div className="mt-6 p-4 bg-gray-100 dark:bg-gray-700 rounded-lg text-center">
            <div className="text-sm text-gray-600 dark:text-gray-400">Your CGPA:</div>
            <div className="text-3xl font-bold text-gray-800 dark:text-white">
              {cgpa}
            </div>
          </div>

          <div className="mt-4 text-sm text-gray-600 dark:text-gray-400">
            <p className="font-semibold mb-2">How to use:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Enter your GPA for each semester (0.00 - 4.00)</li>
              <li>Enter the total credits for each semester</li>
              <li>Add more semesters as needed</li>
              <li>Click Calculate CGPA to see your cumulative GPA</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CGPACalculator;