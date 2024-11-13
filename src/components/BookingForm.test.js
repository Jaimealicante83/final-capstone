import { render, screen, fireEvent } from '@testing-library/react';
import BookingForm from './BookingForm';

test('renders BookingForm with correct default values', () => {
  render(<BookingForm availableTimes={[]} dispatch={jest.fn()} submitForm={jest.fn()} />);

  // Verificar que el input de fecha esté presente
  const dateInput = screen.getByLabelText(/Date/i);
  expect(dateInput).toBeInTheDocument();

  // Verificar que el valor predeterminado de invitados sea 1
  const guestsInput = screen.getByLabelText(/Guests/i);
  expect(guestsInput.value).toBe("1");

  // Verificar que el botón de enviar está deshabilitado por defecto
  const submitButton = screen.getByText(/Book Now/i);
  expect(submitButton).toBeDisabled();
});

test('enables submit button when form is valid', () => {
  const mockSubmitForm = jest.fn();
  render(
    <BookingForm
      availableTimes={['12:00 PM']}
      dispatch={jest.fn()}
      submitForm={mockSubmitForm}
    />
  );

  // Cambiar fecha
  const dateInput = screen.getByLabelText(/Date/i);
  fireEvent.change(dateInput, { target: { value: '2024-11-15' } });

  // Cambiar hora
  const timeSelect = screen.getByLabelText(/Time/i);
  fireEvent.change(timeSelect, { target: { value: '12:00 PM' } });

  // Cambiar número de invitados
  const guestsInput = screen.getByLabelText(/Guests/i);
  fireEvent.change(guestsInput, { target: { value: '2' } });

  // Cambiar ocasión
  const occasionSelect = screen.getByLabelText(/Occasion/i);
  fireEvent.change(occasionSelect, { target: { value: 'Birthday' } });

  // Verificar que el botón de enviar ahora esté habilitado
  const submitButton = screen.getByText(/Book Now/i);
  expect(submitButton).not.toBeDisabled();

  // Enviar el formulario
  fireEvent.click(submitButton);
  expect(mockSubmitForm).toHaveBeenCalled();
});
