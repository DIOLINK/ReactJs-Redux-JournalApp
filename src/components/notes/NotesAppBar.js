import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { startSaveNote } from '../../actions/notes';

export const NotesAppBar = () => {
  const dispatch = useDispatch();
  const { active } = useSelector((state) => state.notes);
  const handleClickSave = () => {
    dispatch(startSaveNote(active));
  };
  return (
    <div className="notes__appbar">
      <span>28 de december 2021</span>
      <div>
        <button className="btn">Picture</button>
        <button onClick={handleClickSave} className="btn">
          Save
        </button>
      </div>
    </div>
  );
};
