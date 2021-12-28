import {
  finishLoading,
  setError,
  startLoading,
  unSetError,
} from '../../../src/actions/ui';
import { types } from '../../types/types';

describe('Test in actions/ui.js', () => {
  it('action setError', () => {
    const action = setError('error');
    expect(action).toEqual({
      type: types.uiSetError,
      payload: 'error',
    });
  });
  it('action unSetError', () => {
    const action = unSetError();
    expect(action).toEqual({
      type: types.uiUnSetError,
    });
  });
  it('action startLoading', () => {
    const action = startLoading();
    expect(action).toEqual({
      type: types.uiStartLoading,
    });
  });
  it('action finishLoading', () => {
    const action = finishLoading();
    expect(action).toEqual({
      type: types.uiFinishLoading,
    });
  });
});
