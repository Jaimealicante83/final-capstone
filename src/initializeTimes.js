import { initializeTimes } from './apiFunctions';
import { fetchAPI } from './apiFunctions';

jest.mock('./apiFunctions', () => ({
  ...jest.requireActual('./apiFunctions'),
  fetchAPI: jest.fn(),
}));

describe('initializeTimes', () => {
  it('should call fetchAPI and return available times', async () => {
    // Simula un valor de retorno para fetchAPI
    const mockTimes = ['12:00 PM', '1:00 PM', '2:00 PM'];
    fetchAPI.mockResolvedValue(mockTimes);

    const result = await initializeTimes();
    expect(fetchAPI).toHaveBeenCalledWith(new Date().toISOString().split('T')[0]); // Verifica que se llama con la fecha actual
    expect(result).toEqual(mockTimes); // Verifica el resultado
  });
});
