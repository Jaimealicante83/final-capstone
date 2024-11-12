// Simulación de fetchAPI (puedes reemplazar con tu lógica real)
export const fetchAPI = async (date) => {
    return ['12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM']; // Ejemplo de datos simulados
  };
  
  // Función para inicializar tiempos disponibles
  export const initializeTimes = async () => {
    try {
      const today = new Date().toISOString().split('T')[0];
      const times = await fetchAPI(today);
      return times;
    } catch (error) {
      console.error('Error fetching initial times:', error);
      return [];
    }
  };
  
  // Función para actualizar tiempos
  export const updateTimes = (state, action) => {
    switch (action.type) {
      case 'INITIALIZE_TIMES':
        return action.payload;
      default:
        return state;
    }
  };
  
  // Simulación de submitAPI (puedes reemplazar con tu lógica real)
  export const submitAPI = async (formData) => {
    console.log('Datos enviados:', formData);
    return true; // Simulación de envío exitoso
  };
  