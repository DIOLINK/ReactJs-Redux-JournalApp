import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import moment from 'moment';

import { startSaveNote, startUploadingPicture } from '../../actions/notes';

export const NotesAppBar = () => {
  const dispatch = useDispatch();
  const { active } = useSelector((state) => state.notes);

  const noteDate = moment(new Date().getTime());

  const handlePictureUpload = () => {
    document.getElementById('fileSelector').click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      dispatch(startUploadingPicture(file));
    }
  };

  const handleClickSave = () => {
    dispatch(startSaveNote(active));
  };

  return (
    <div className="notes__appbar">
      <span>{noteDate.format('MMMM Do YYYY')}</span>
      <input
        id="fileSelector"
        type="file"
        name="filesPicture"
        style={{ display: 'none' }}
        onChange={handleFileChange}
      />
      <div>
        <button onClick={handlePictureUpload} className="btn">
          Picture
        </button>
        <button onClick={handleClickSave} className="btn">
          Save
        </button>
      </div>
    </div>
  );
};
