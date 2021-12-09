import Swal from 'sweetalert2';
import { db } from '../firebase/firebase-config';
import { loadNotes } from '../helpers/loadNotes';
import { types } from '../types/types';

export const startNewNote = (note) => {
  return async (dispatch, getState) => {
    const uid = getState().auth.uid;
    const newNote = {
      title: '',
      body: '',
      date: new Date().getTime(),
    };
    const doc = await db.collection(`${uid}/journal/notes`).add(newNote);
    dispatch(activeNote(doc.id, newNote));
  };
};

export const activeNote = (id, note) => ({
  type: types.notesActive,
  payload: {
    id,
    ...note,
  },
});

export const startLoadingNotes = (uid) => {
  return async (dispatch) => {
    const notes = await loadNotes(uid);
    dispatch(setNotes(notes));
  };
};

export const setNotes = (notes) => ({
  type: types.notesLoad,
  payload: notes,
});

export const startSaveNote = (note) => {
  return async (dispatch, getState) => {
    if (!note.url) {
      delete note.url;
    }
    const uid = getState().auth.uid;
    const noteToSave = {
      ...note,
    };
    delete noteToSave.id;
    await db.doc(`${uid}/journal/notes/${note.id}`).update(noteToSave);
    dispatch(refreshNote(note.id, noteToSave));
    Swal.fire('Saved', 'Your note has been saved', 'success');
  };
};

export const refreshNote = (id, note) => ({
  type: types.notesUpdated,
  payload: {
    id,
    note: {
      id,
      ...note,
    },
  },
});
