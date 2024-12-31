function setupQuestions() {
  const questions = [
    { id: 1, title: 'Two Sum', difficulty: 'Easy', category: 'Arrays' },
    { id: 2, title: 'Valid Parentheses', difficulty: 'Easy', category: 'Stacks' },
    { id: 3, title: 'Merge K Sorted Lists', difficulty: 'Hard', category: 'Linked Lists' }
  ];

  return `
    <div class="content-section">
      <h2>DSA Questions</h2>
      <div class="question-list">
        ${questions.map(q => `
          <div class="question-item">
            <div>
              <h3>${q.title}</h3>
              <span>${q.category} - ${q.difficulty}</span>
            </div>
            <button onclick="markSolved(${q.id})">Mark as Solved</button>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}
