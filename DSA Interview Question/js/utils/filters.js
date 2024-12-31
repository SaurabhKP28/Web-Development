// Handle problem filtering
const Filters = {
    getFilteredProblems() {
        const categoryFilter = document.getElementById('category-filter').value;
        const difficultyFilter = document.getElementById('difficulty-filter').value;
        const statusFilter = document.getElementById('status-filter').value;
        const solvedProblems = Storage.getSolvedProblems();

        return problems.filter(problem => {
            const categoryMatch = categoryFilter === 'all' || problem.category === categoryFilter;
            const difficultyMatch = difficultyFilter === 'all' || problem.difficulty === difficultyFilter;
            const isSolved = solvedProblems.includes(problem.id);
            const statusMatch = statusFilter === 'all' || 
                (statusFilter === 'solved' && isSolved) || 
                (statusFilter === 'unsolved' && !isSolved);

            return categoryMatch && difficultyMatch && statusMatch;
        });
    }
};