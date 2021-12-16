import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { activeNote } from '../../actions/notes';
import useForm from '../../hooks/useForm';
import { NotesAppBar } from './NotesAppBar';

export const NotePage = () => {
  const dispatch = useDispatch();
  const { active } = useSelector((state) => state.notes);
  const [formValues, handleInputChange, reset] = useForm(active);

  const { body, title } = formValues;
  const activeId = useRef(active.id);

  useEffect(() => {
    if (active.id !== activeId.current) {
      reset(active);
      activeId.current = active.id;
    }
  }, [active, reset]);

  useEffect(() => {
    dispatch(activeNote(formValues.id, { ...formValues }));
  }, [formValues, dispatch]);

  return (
    <div className="notes__main-content">
      <NotesAppBar />
      <div className="notes__content">
        <input
          type="text"
          name="title"
          className="notes__title-input"
          placeholder="Some awesome title"
          autoComplete="off"
          value={title}
          onChange={handleInputChange}
        />
        <textarea
          name="body"
          className="notes__textarea"
          placeholder="What happened today"
          value={body}
          onChange={handleInputChange}
        ></textarea>
        {active.url && (
          <div className="notes__image">
            <img src={active.url} alt="imagen" />
          </div>
        )}
      </div>
    </div>
  );
};
