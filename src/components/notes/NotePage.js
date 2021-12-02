import React from 'react';
import { NotesAppBar } from './NotesAppBar';

export const NotePage = () => {
  return (
    <div className="notes__main-content">
      <NotesAppBar />
      <div className="notes__content">
        <input
          type="text"
          name=""
          className="notes__title-input"
          placeholder="Some awesome title"
          autoComplete="off"
        />
        <textarea
          name=""
          className="notes__textarea"
          placeholder="What happened today"
        ></textarea>
        <div className="notes__image">
          <img
            src="https://www.latercera.com/resizer/n0qlZFIxhudVhzdprimDh0wH26A=/900x600/smart/arc-anglerfish-arc2-prod-copesa.s3.amazonaws.com/public/42NQEIM25VAEXMK4D6LJCXRSSM.jpg"
            alt="imagess"
          />
        </div>
      </div>
    </div>
  );
};
