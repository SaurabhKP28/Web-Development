import React, { useState } from 'react';

interface Course {
  id: number;
  name: string;
  grade: string;
  credits: string;
}

const GPACalculator: React.FC = () => {
  const [courses, setCourses] = useState<Course[]>([
    { id: 1, name: '', grade: '', credits: '' }
  ]);
  const [gpa, setGPA] = useState<string>('0.00');

  const gradePoints: { [key: string]: number } = {
    'A': 4.0, 'A-': 3.7,
    'B+': 3.3, 'B': 3.0, 'B-': 2.7,
    'C+': 2.3, 'C': 2.0, 'C-': 1.7,
    'D+': 1.3, 'D': 1.0, 'F': 0.0
  };

  const addCourse = () => {
    setCourses([...courses, { 
      id: courses.length + 1, 
      name: '', 
      grade: '', 
      credits: '' 
    }]);
  };

  const removeCourse = (id: number) => {
    if (courses.length > 1) {
      setCourses(courses.filter(course => course.id !== id));
    }
  };

  const updateCourse = (id: number, field: keyof Course, value: string) => {
    setCourses(courses.map(course => 
      course.id === id ? { ...course, [field]: value } : course
    ));
  };

  const calculateGPA = () => {
    let totalPoints = 0;
    let totalCredits = 0;

    courses.forEach(course => {
      const credits = parseFloat(course.credits);
      if (!isNaN(credits) && course.grade in gradePoints) {
        totalPoints += credits * gradePoints[course.grade];
        totalCredits += credits;
      }
    });

    if (totalCredits === 0) {
      setGPA('0.00');
    } else {
      setGPA((totalPoints / totalCredits).toFixed(2));
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">GPA Calculator</h2>
        
        <div className="space-y-4">
          {courses.map(course => (
            <div key={course.id} className="grid grid-cols-12 gap-4 items-center">
              <div className="col-span-4">
                <input
                  type="text"
                  placeholder="Course Name"
                  value={course.name}
                  onChange={(e) => updateCourse(course.id, 'name', e.target.value)}
                  className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                />
              </div>
              <div className="col-span-3">
                <select
                  value={course.grade}
                  onChange={(e) => updateCourse(course.id, 'grade', e.target.value)}
                  className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                >
                  <option value="">Grade</option>
                  {Object.keys(gradePoints).map(grade => (
                    <option key={grade} value={grade}>{grade}</option>
                  ))}
                </select>
              </div>
              <div className="col-span-3">
                <input
                  type="number"
                  placeholder="Credits"
                  value={course.credits}
                  onChange={(e) => updateCourse(course.id, 'credits', e.target.value)}
                  className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                />
              </div>
              <div className="col-span-2 flex justify-end">
                <button
                  onClick={() => removeCourse(course.id)}
                  className="p-2 text-red-500 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300"
                  disabled={courses.length === 1}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          <div className="flex justify-between">
            <button
              onClick={addCourse}
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
            >
              Add Course
            </button>
            <button
              onClick={calculateGPA}
              className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
            >
              Calculate GPA
            </button>
          </div>

          <div className="mt-6 p-4 bg-gray-100 dark:bg-gray-700 rounded-lg text-center">
            <div className="text-sm text-gray-600 dark:text-gray-400">Your GPA:</div>
            <div className="text-3xl font-bold text-gray-800 dark:text-white">
              {gpa}
            </div>
          </div>

          <div className="mt-4 text-sm text-gray-600 dark:text-gray-400">
            <p className="font-semibold">Grade Points:</p>
            <div className="grid grid-cols-4 gap-2 mt-2">
              {Object.entries(gradePoints).map(([grade, points]) => (
                <div key={grade}>
                  {grade}: {points.toFixed(1)}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GPACalculator;