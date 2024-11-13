import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importar useNavigate aquí
import BookingForm from './BookingForm';
import { initializeTimes, submitAPI } from '../apiFunctions';
import '../App.css';

function BookingPage({ dispatch }) {
  const [availableTimes, setAvailableTimes] = useState([]);
  const navigate = useNavigate(); // Ahora puedes usar useNavigate

  useEffect(() => {
    const fetchTimes = async () => {
      const times = await initializeTimes();
      setAvailableTimes(times);
    };
    fetchTimes();
  }, []);

  const submitForm = async (formData) => {
    const success = await submitAPI(formData);
    if (success) {
      navigate('/booking-confirmed'); // Navegar aquí
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h1 style={{ marginTop: '3rem', marginBottom: '3rem' }}>Booking Page</h1>
      <BookingForm availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm} />
    </div>
  );
}

export default BookingPage;
