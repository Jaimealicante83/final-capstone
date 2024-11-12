import { useState } from 'react';
import { fetchAPI } from '../apiFunctions';

function BookingForm({ availableTimes, dispatch, submitForm }) {
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState('');

  const handleDateChange = async (e) => {
    const newDate = e.target.value;
    setDate(newDate);
    const newTimes = await fetchAPI(newDate);
    dispatch({ type: 'UPDATE_TIMES', payload: newTimes });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      date,
      time,
      guests,
      occasion
    };
    submitForm(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Fecha:
        <input
          type="date"
          value={date}
          onChange={handleDateChange}
        />
      </label>
      <label>
        Hora:
        <select value={time} onChange={(e) => setTime(e.target.value)}>
          {availableTimes.map((timeOption) => (
            <option key={timeOption} value={timeOption}>
              {timeOption}
            </option>
          ))}
        </select>
      </label>
      <label>
        Invitados:
        <input
          type="number"
          min="1"
          max="10"
          value={guests}
          onChange={(e) => setGuests(e.target.value)}
        />
      </label>
      <label>
        Ocasion:
        <select value={occasion} onChange={(e) => setOccasion(e.target.value)}>
          <option value="Birthday">Birthday</option>
          <option value="Anniversary">Anniversary</option>
        </select>
      </label>
      <button type="submit">Reservar</button>
    </form>
  );
}

export default BookingForm;
