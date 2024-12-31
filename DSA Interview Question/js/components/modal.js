// Handle modal functionality
const Modal = {
    open(id, title) {
        currentProblemId = id;
        document.getElementById('problem-title').textContent = title;
        document.getElementById('note-textarea').value = Storage.getNotes()[id] || "";
        document.getElementById('note-modal').style.display = 'block';
    },

    close() {
        document.getElementById('note-modal').style.display = 'none';
    },

    save() {
        const note = document.getElementById('note-textarea').value;
        if (currentProblemId !== null) {
            Storage.saveNote(currentProblemId, note);
            renderProblems();
        }
        this.close();
    },

    delete() {
        if (currentProblemId !== null) {
            Storage.deleteNote(currentProblemId);
            renderProblems();
        }
        this.close();
    }
};