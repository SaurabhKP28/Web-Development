function setupTips() {
  const tips = [
    'Start with easy problems to build confidence',
    'Practice regularly, even if just for 30 minutes',
    'Focus on understanding patterns rather than memorizing solutions',
    'Always analyze time and space complexity',
    'Review and optimize your solutions'
  ];

  return `
    <div class="content-section">
      <h2>DSA Tips</h2>
      <ul class="tips-list">
        ${tips.map(tip => `<li>${tip}</li>`).join('')}
      </ul>
    </div>
  `;
}
