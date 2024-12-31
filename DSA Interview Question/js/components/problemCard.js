// Handle problem card creation and interaction
const ProblemCard = {
    calculateProgress(problemId) {
        const hasNotes = !!Storage.getNotes()[problemId];
        const isSolved = Storage.getSolvedProblems().includes(problemId);
        
        let progress = 0;
        if (hasNotes) progress += 50;
        if (isSolved) progress += 50;
        
        return progress;
    },

    create(problem) {
        const isSolved = Storage.getSolvedProblems().includes(problem.id);
        const progress = this.calculateProgress(problem.id);
        
        return `
            <div class="problem-card" onclick="ProblemCard.expand(${problem.id})">
                <div class="problem-header">
                    <h3 class="problem-title"><strong>${problem.title}</strong></h3>
                    <span class="difficulty ${problem.difficulty}">${problem.difficulty}</span>
                </div>
                <div class="problem-category"><strong>${problem.category}</strong></div>
                <p>${problem.description}</p>
                <div class="problem-actions">
                    <a href="${problem.link}" target="_blank" class="solve-btn ${isSolved ? 'solved' : ''}">
                        ${isSolved ? 'Solved' : 'Solve'}
                    </a>
                    <div class="checkbox-wrapper">
                        <input type="checkbox" id="problem-${problem.id}" 
                            ${isSolved ? 'checked' : ''} 
                            onchange="ProblemCard.toggleSolved(${problem.id}, this.checked)">
                        <label for="problem-${problem.id}">Mark as solved</label>
                    </div>
                    <button class="note-btn" onclick="Modal.open(${problem.id}, '${problem.title}')">Take Note</button>
                </div>
            </div>
        `;
    },

    /*expand(problemId) {
        const problem = problems.find(p => p.id === problemId);
        if (!problem) return;
        
        Modal.open(problemId, problem.title);
    },*/

    toggleSolved(id, solved) {
        Storage.setProblemSolved(id, solved);
        updateProgress();
        renderProblems();
    }
};