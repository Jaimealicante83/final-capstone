import { useState, useEffect } from 'react';
import { fetchAPI } from '../apiFunctions';

function BookingForm({ availableTimes = [], dispatch, submitForm }) {
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    setIsFormValid(date && time && guests > 0 && guests <= 10 && occasion);
  }, [date, time, guests, occasion]);

  const handleDateChange = async (e) => {
    const newDate = e.target.value;
    setDate(newDate);
    const newTimes = await fetchAPI(newDate);
    dispatch({ type: 'UPDATE_TIMES', payload: newTimes });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid) {
      const formData = {
        date,
        time,
        guests,
        occasion,
      };
      submitForm(formData);
    } else {
      alert('Please fill out all fields correctly before submitting.');
    }
  };

  return (
    <form onSubmit={handleSubmit} class="formulari">
      <label htmlFor="date">Date:</label>
      <input
        type="date"
        id="date"
        value={date}
        onChange={handleDateChange}
        required
      />

      <label htmlFor="time">Time:</label>
      <select
        id="time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        disabled={availableTimes.length === 0}
        required
      >
        {availableTimes.length === 0 ? (
          <option value="">No times available</option>
        ) : (
          availableTimes.map((timeOption) => (
            <option key={timeOption} value={timeOption}>
              {timeOption}
            </option>
          ))
        )}
      </select>

      <label htmlFor="guests">Guests:</label>
      <input
        type="number"
        id="guests"
        min="1"
        max="10"
        value={guests}
        onChange={(e) => setGuests(parseInt(e.target.value, 10))}
        required
      />

      <label htmlFor="occasion">Occasion:</label>
      <select
        id="occasion"
        value={occasion}
        onChange={(e) => setOccasion(e.target.value)}
        required
      >
        <option value="">Select an occasion</option>
        <option value="Birthday">Birthday</option>
        <option value="Anniversary">Anniversary</option>
      </select>

      <button type="submit" disabled={!isFormValid} class="btn-black">
        Book Now
      </button>
    </form>
  );
}

export default BookingForm;
