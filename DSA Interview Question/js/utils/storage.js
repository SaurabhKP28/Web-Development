// Handle localStorage operations
const Storage = {
    getSolvedProblems() {
        return JSON.parse(localStorage.getItem('solvedProblems')) || [];
    },
    
    setProblemSolved(id, solved) {
        const solvedProblems = this.getSolvedProblems();
        if (solved) {
            solvedProblems.push(id);
        } else {
            const index = solvedProblems.indexOf(id);
            if (index > -1) solvedProblems.splice(index, 1);
        }
        localStorage.setItem('solvedProblems', JSON.stringify(solvedProblems));
    },
    
    getNotes() {
        return JSON.parse(localStorage.getItem('problemNotes')) || {};
    },
    
    saveNote(id, note) {
        const notes = this.getNotes();
        notes[id] = note;
        localStorage.setItem('problemNotes', JSON.stringify(notes));
    },
    
    deleteNote(id) {
        const notes = this.getNotes();
        delete notes[id];
        localStorage.setItem('problemNotes', JSON.stringify(notes));
    }
};