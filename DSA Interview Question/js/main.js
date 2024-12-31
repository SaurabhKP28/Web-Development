// Main Application Logic
let currentProblemId = null;

function updateProgress() {
  const progressCount = document.getElementById('progress-count');
  const progressFill = document.getElementById('progress-fill');
  const percentage = (Storage.getSolvedProblems().length / problems.length) * 100;

  progressCount.textContent = `${Storage.getSolvedProblems().length}/${problems.length}`;
  progressFill.style.width = `${percentage}%`;
}

function renderProblems() {
  const filteredProblems = Filters.getFilteredProblems();
  const problemsList = document.getElementById('problems-list');
  problemsList.innerHTML = filteredProblems.map(problem => ProblemCard.create(problem)).join('');
}

// Load Additional Content
document.getElementById('questionsLink').onclick = () => this.showPage('questionsPage');
        document.getElementById('tipsLink').onclick = () => this.showPage('tipsPage');
        document.getElementById('acknowledgementsLink').onclick = () => this.showPage('acknowledgementsPage');



// Event Listeners
document.getElementById('category-filter').addEventListener('change', renderProblems);
document.getElementById('difficulty-filter').addEventListener('change', renderProblems);
document.getElementById('status-filter').addEventListener('change', renderProblems);
document.getElementById('night-mode-toggle').addEventListener('click', NightMode.toggle);
document.getElementById('close-modal').addEventListener('click', Modal.close);
document.getElementById('save-note-btn').addEventListener('click', () => Modal.save());
document.getElementById('delete-note-btn').addEventListener('click', () => Modal.delete());

// Initialize
updateProgress();
renderProblems();
loadExtraContent();


