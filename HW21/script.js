document.addEventListener("DOMContentLoaded", function () {
    const addNoteButton = document.getElementById("addNote");
    const newNoteInput = document.getElementById("newNote");
    const notesList = document.getElementById("notesList");

    const notes = JSON.parse(localStorage.getItem("notes")) || [];


    function updateNotes() {
        notesList.innerHTML = "";
        notes.forEach((note, index) => {
            const noteDiv = document.createElement("div");
            noteDiv.classList.add("note");
            noteDiv.innerHTML = `
                <p>${note}</p>
                <button class="edit">Edit</button>
                <button class="delete">Delete</button>
            `;


            noteDiv.querySelector(".edit").addEventListener("click", () => editNote(index));
            noteDiv.querySelector(".delete").addEventListener("click", () => deleteNote(index));

            notesList.appendChild(noteDiv);
        });
    }


    function addNote() {
        const newNote = newNoteInput.value.trim();
        if (newNote) {
            notes.push(newNote);
            newNoteInput.value = "";
            updateLocalStorage();
            updateNotes();
        }
    }

    function editNote(index) {
        const editedNote = prompt("Edit note:", notes[index]);
        if (editedNote !== null) {
            notes[index] = editedNote;
            updateLocalStorage();
            updateNotes();
        }
    }


    function deleteNote(index) {
        if (confirm("Confirm deleting mote")) {
            notes.splice(index, 1);
            updateLocalStorage();
            updateNotes();
        }
    }


    function updateLocalStorage() {
        localStorage.setItem("notes", JSON.stringify(notes));
    }


    addNoteButton.addEventListener("click", addNote);


    updateNotes();
});
