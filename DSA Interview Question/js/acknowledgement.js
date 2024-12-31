function setupAcknowledgements() {
  const acknowledgements = [
    'LeetCode for problem inspiration',
    'GeeksforGeeks for educational content',
    'The DSA community for support',
    'Open source contributors'
  ];

  return `
    <div class="content-section">
      <h2>Acknowledgements</h2>
      <ul class="acknowledgements-list">
        ${acknowledgements.map(ack => `<li>${ack}</li>`).join('')}
      </ul>
    </div>
  `;
}
