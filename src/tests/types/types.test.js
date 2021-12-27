import { types } from '../../types/types';

describe('Test in Types.js', () => {
  it('Is object of type?', () => {
    expect(typeof types).toBe('object');
  });
  it('Is object is equal to?', () => {
    expect(types).toEqual({
      login: '[Auth] Login',
      logout: '[Auth] Logout',

      uiSetError: '[UI] Set Error',
      uiUnSetError: '[UI] UnSet Error',

      uiStartLoading: '[UI] Start loading',
      uiFinishLoading: '[UI] Finish loading',

      notesAddNew: '[Notes] New Note',
      notesActive: '[Notes] Set Active Note',
      notesLoad: '[Notes] Load Notes',
      notesUpdated: '[Notes] Updated Note',
      notesFileUrl: '[Notes] Updated Image Url',
      notesDeleted: '[Notes] Deleted Note',
      notesLogoutCleaning: '[Notes] Logout Cleaning',
    });
  });
});
