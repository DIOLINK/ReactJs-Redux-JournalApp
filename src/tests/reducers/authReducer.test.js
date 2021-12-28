import { authReducer } from '../../reducers/authReducer';
import { types } from '../../types/types';

describe('Test in authReducer.js', () => {
  it('login', () => {
    const initState = {};
    const action = {
      type: types.login,
      payload: {
        uid: 'acb123',
        displayName: 'Roger',
      },
    };
    const newState = authReducer(initState, action);
    expect(newState).toEqual({ uid: 'acb123', name: 'Roger' });
  });
  it('logout', () => {
    const initState = { uid: 'acb123', name: 'Roger' };
    const action = {
      type: types.logout,
    };
    const newState = authReducer(initState, action);
    expect(newState).toEqual({});
  });
  it('error other action, the status has not changed', () => {
    const initState = { uid: 'acb123', name: 'Roger' };
    const action = {
      type: 'asdasdasd',
    };
    const newState = authReducer(initState, action);
    expect(newState).toEqual(initState);
  });
});
