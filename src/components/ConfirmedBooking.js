import React from 'react';

function ConfirmedBooking() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'center', marginTop: '3rem' }}>
      <h1>Booking Confirmed!</h1>
      <p style={{ fontSize: '2.6rem', marginTop: '3rem', marginBottom: '3rem', color: 'green' }}>Your booking has been successfully confirmed. Thank you for choosing Little Lemon!</p>
      <img style={{ width: '60%', height: 'auto',  margin: '0 auto' }} src="assets/sucess.jpeg" alt="success on booking a table" />
    </div>
  );
}

export default ConfirmedBooking;
