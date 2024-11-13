import { updateTimes } from './apiFunctions';

describe('updateTimes', () => {
  it('should update available times based on the provided date', () => {
    const initialState = ['10:00 AM', '11:00 AM'];
    const action = {
      type: 'UPDATE_TIMES',
      payload: ['12:00 PM', '1:00 PM'],
    };
    const result = updateTimes(initialState, action);
    expect(result).toEqual(['12:00 PM', '1:00 PM']); // Verifica que el estado se actualiza correctamente
  });
});
